---
title: "Armazenando na nuvem"
date: "2020-06-13"
---
<p>Para armazená-lo na nuvem, decidimos utilizar os serviços da AWS (Amazon Web Services). Para isso, usamos a EC2 (Máquina Virtual) Linux 2 da Amazon, ao preparar a EC2 precisamos algumas instalações essenciais para conseguir fazer com que o site rode apropriadamente, tais como o LAMP, MariaDB, PHP e HTML. As instalações são feitos nos seguintes passos (Assumindo que já tenha feito o build das págias, estejam em um repositório e o git esteja instalado no terminal da máquina):</p>

1. Entar como raiz (root) na máquina.
    <p><code>$ sudo -i</code></p>

2. Verificar se está tudo atualizado.
   <p> <code>$ sudo yum update -y</code></p>

3. Instalar o LAMP, MariaDB e PHP.
   <p> <code>$ sudo amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2</code></p>

4. Instalar os pacotes de software e dependências.
    <p><code>$ sudo yum install -y httpd mariadb-server</code></p>

5. Iniciar o servidor Apache.
    <p><code>$ sudo systemctl start httpd</code></p>

6. Confirir se o Apache está funcioando. Ele deverá aparecer a seguinte página (caso não tenha colocado nenhum conteúdo na pasta /var/www/html).

<img src="https://pbs.twimg.com/media/EabCRQ1XQAELCWw?format=png&name=small" width="500px" style="vertical-align:middle;margin:0px 210px; margin-bottom: 20px">

7. Colocar um conteúdo na pasta /var/www/html (caso já não tenha feito).
    1. Clone o repositório para o terminal da máquina.
        <p><code>$ git clone (repositório)</code></p>
    2. Passe as pastas que contem os arquivos um HTML para a pasta /var/www/html.
        <p><code>$ rsync -r blogpi/pastacomoshtmls/. var/www/html</code></p>

<p>Por último, tivemos que criar/arrumar os Security Groups para permitir acesso às outras máquinas, como o HTTPS (onde ele libera o site para todos) e o SSH (autorizado pela chave que é gerado ao criar a instância da máquina).</p>