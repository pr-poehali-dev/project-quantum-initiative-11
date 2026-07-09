import json
import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header


def handler(event: dict, context) -> dict:
    """Принимает заявку из формы обратной связи и отправляет её на почту компании"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    email = (body.get('email') or '').strip()
    message = (body.get('message') or '').strip()

    if not email or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Поле \"Почта\" и \"Состав продукта\" обязательны'})
        }

    smtp_host = os.environ['SMTP_HOST']
    smtp_port = int(os.environ['SMTP_PORT'])
    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']
    recipient = 'expert-reg@mail.ru'

    text = (
        f'Новая заявка с сайта\n\n'
        f'Имя: {name or "не указано"}\n'
        f'Почта: {email}\n\n'
        f'Состав продукта:\n{message}'
    )

    msg = MIMEText(text, 'plain', 'utf-8')
    msg['Subject'] = Header('Новая заявка на проверку состава', 'utf-8')
    msg['From'] = smtp_user
    msg['To'] = recipient
    msg['Reply-To'] = email

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, [recipient], msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True})
    }

