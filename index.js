<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Veltrix Bot</title>
  <style>
    :root{
      --bg:#0b0b12; --card:#121221; --card2:#17172a; --text:#f4f4ff;
      --muted:#a7a7c7; --pink:#ff4fd8; --pink2:#7c4dff; --line:rgba(255,255,255,.08);
    }
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{
      margin:0; font-family:Arial,Helvetica,sans-serif; color:var(--text);
      background:
        radial-gradient(circle at top, rgba(255,79,216,.18), transparent 28%),
        radial-gradient(circle at 80% 20%, rgba(124,77,255,.18), transparent 22%),
        var(--bg);
    }
    a{color:inherit; text-decoration:none}
    .wrap{max-width:1180px; margin:auto; padding:24px}
    .nav{
      display:flex; justify-content:space-between; align-items:center; gap:16px;
      position:sticky; top:0; backdrop-filter:blur(14px); background:rgba(11,11,18,.72);
      border-bottom:1px solid var(--line); z-index:10; padding:14px 24px;
    }
    .brand{font-weight:800; letter-spacing:.5px}
    .menu{display:flex; gap:18px; flex-wrap:wrap; color:var(--muted); font-size:14px}
    .btn{
      background:linear-gradient(90deg,var(--pink),var(--pink2));
      color:#fff; border:none; border-radius:999px; padding:12px 18px; font-weight:700;
      display:inline-block;
    }
    .hero{
      padding:80px 0 34px; display:grid; grid-template-columns:1.2fr .8fr; gap:24px; align-items:center;
    }
    .eyebrow{color:#ff9bf0; font-size:13px; text-transform:uppercase; letter-spacing:1.4px}
    h1{font-size:clamp(38px,6vw,68px); line-height:1.02; margin:12px 0}
    .sub{color:var(--muted); font-size:18px; line-height:1.6; max-width:650px}
    .actions{display:flex; gap:12px; margin-top:24px; flex-wrap:wrap}
    .ghost{
      border:1px solid var(--line); background:rgba(255,255,255,.03); color:var(--text);
      border-radius:999px; padding:12px 18px; font-weight:700;
    }
    .panel,.card{
      background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
      border:1px solid var(--line); border-radius:20px;
      box-shadow:0 20px 60px rgba(0,0,0,.25);
    }
    .panel{padding:20px}
    .stats{display:grid; grid-template-columns:repeat(2,1fr); gap:12px}
    .stat{padding:16px; background:var(--card); border:1px solid var(--line); border-radius:16px}
    .stat b{display:block; font-size:24px}
    section{padding:28px 0}
    .section-title{font-size:28px; margin:0 0 14px}
    .grid3,.grid2{display:grid; gap:16px}
    .grid3{grid-template-columns:repeat(3,1fr)}
    .grid2{grid-template-columns:repeat(2,1fr)}
    .card{padding:18px; background:var(--card)}
    .muted{color:var(--muted)}
    .tag{display:inline-block; font-size:12px; padding:6px 10px; border-radius:999px; background:rgba(255,79,216,.12); color:#ff9bf0}
    .theme{
      margin-top:18px; display:flex; gap:10px; flex-wrap:wrap; align-items:center;
      color:var(--muted); font-size:14px;
    }
    select,input,textarea{
      width:100%; background:#0f0f1b; color:var(--text); border:1px solid var(--line);
      border-radius:14px; padding:12px 14px; outline:none;
    }
    .mini{display:grid; grid-template-columns:repeat(3,1fr); gap:14px}
    .bar{
      height:10px; border-radius:999px; background:#23233a; overflow:hidden; margin-top:10px;
    }
    .bar > span{display:block; height:100%; background:linear-gradient(90deg,var(--pink),var(--pink2))}
    .faq details{background:var(--card); border:1px solid var(--line); border-radius:14px; padding:14px 16px}
    .faq summary{cursor:pointer; font-weight:700}
    footer{
      margin-top:26px; padding:28px 0 40px; border-top:1px solid var(--line); color:var(--muted)
    }
    @media (max-width: 900px){
      .hero,.grid3,.grid2,.mini{grid-template-columns:1fr}
      .nav{position:static}
    }
  </style>
</head>
<body>
  <header class="nav">
    <div class="brand">VELTRIX</div>
    <nav class="menu">
      <a href="#home">Home</a>
      <a href="#dashboard">Dashboard</a>
      <a href="#comandos">Comandos</a>
      <a href="#planos">Planos</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="btn" href="#discord">Adicionar ao Discord</a>
  </header>

  <main class="wrap">
    <section class="hero" id="home">
      <div>
        <div class="eyebrow">Discord Bot • Neon Experience</div>
        <h1>Comunidades Épicas Construídas Aqui.</h1>
        <p class="sub">
          O Veltrix é um bot moderno para Discord com automação inteligente, comandos poderosos,
          permissões seguras e visual premium.
        </p>
        <div class="actions">
          <a class="btn" href="#discord">Adicionar ao Discord</a>
          <a class="ghost" href="#recursos">Explorar Recursos</a>
        </div>

        <div class="theme">
          <strong>Escolher tema:</strong>
          <select>
            <option>Light</option>
            <option selected>Dark</option>
            <option>Neon</option>
            <option>Cyberpunk</option>
            <option>Ocean</option>
            <option>Forest</option>
          </select>
        </div>
      </div>

      <div class="panel" id="dashboard">
        <div class="stats">
          <div class="stat"><b>2.716.581+</b><span class="muted">usuários ativos</span></div>
          <div class="stat"><b>12.030</b><span class="muted">servidores</span></div>
          <div class="stat"><b>145+</b><span class="muted">comandos</span></div>
          <div class="stat"><b>96%</b><span class="muted">uptime</span></div>
        </div>
      </div>
    </section>

    <section id="recursos">
      <h2 class="section-title">Por que escolher o Veltrix?</h2>
      <div class="grid3">
        <div class="card"><span class="tag">Moderno & Inteligente</span><p>Interface elegante e respostas rápidas para gerir sua comunidade.</p></div>
        <div class="card"><span class="tag">Poderoso</span><p>Automação, moderação, música, utilidades e suporte para escalar seu servidor.</p></div>
        <div class="card"><span class="tag">Fácil de Usar</span><p>Setup simples em poucos minutos, sem complicação.</p></div>
        <div class="card"><span class="tag">Comunidade Ativa</span><p>Ferramentas pensadas para engajamento e crescimento contínuo.</p></div>
        <div class="card"><span class="tag">Suporte 24/7</span><p>Ajuda contínua para manter tudo funcionando.</p></div>
        <div class="card"><span class="tag">Alta Disponibilidade</span><p>Arquitetura preparada para estabilidade e performance.</p></div>
      </div>
    </section>

    <section>
      <h2 class="section-title">Comece em Minutos</h2>
      <div class="mini">
        <div class="card"><h3>1. Convide o Bot</h3><p class="muted">Adicione o Veltrix ao seu servidor.</p></div>
        <div class="card"><h3>2. Configure Permissões</h3><p class="muted">Escolha o acesso ideal com segurança.</p></div>
        <div class="card"><h3>3. Comece a Usar</h3><p class="muted">Ative comandos e personalize o bot.</p></div>
      </div>
    </section>

    <section id="comandos">
      <h2 class="section-title">Lista de Comandos</h2>
      <div class="grid2">
        <div class="card">
          <h3>/play</h3>
          <p class="muted">Toca uma música ou playlist no canal de voz.</p>
          <div class="bar"><span style="width:92%"></span></div>
        </div>
        <div class="card">
          <h3>/ban</h3>
          <p class="muted">Remove usuários que violam as regras do servidor.</p>
          <div class="bar"><span style="width:78%"></span></div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="section-title">Dashboard Global</h2>
      <div class="grid2">
        <div class="card"><h3>Uso de Comandos (7 dias)</h3><p class="muted">Gráfico de linha com crescimento semanal.</p></div>
        <div class="card"><h3>Comandos Populares</h3><p class="muted">Top comandos: /play, /ban, /help, /config.</p></div>
      </div>
    </section>

    <section>
      <h2 class="section-title">Últimas Atualizações</h2>
      <div class="grid2">
        <div class="card"><b>Maio/2026</b><p class="muted">Novos recursos, melhorias de performance e ajustes no chat IA.</p></div>
        <div class="card"><b>Abril/2026</b><p class="muted">Mais comandos, dashboard renovado e estabilidade aprimorada.</p></div>
      </div>
    </section>

    <section id="planos">
      <h2 class="section-title">Planos</h2>
      <div class="grid3">
        <div class="card"><h3>Gratuito</h3><p class="muted">Funções essenciais para começar.</p></div>
        <div class="card"><h3>Premium</h3><p class="muted">Recursos avançados e mais personalização.</p></div>
        <div class="card"><h3>Ultimate</h3><p class="muted">Tudo liberado com prioridade máxima.</p></div>
      </div>
    </section>

    <section class="faq" id="faq">
      <h2 class="section-title">FAQ</h2>
      <div class="grid2">
        <details><summary>Como adiciono o bot?</summary><p class="muted">Clique em “Adicionar ao Discord” e siga a autorização.</p></details>
        <details><summary>Posso mudar o tema?</summary><p class="muted">Sim, há vários temas como Dark, Neon e Cyberpunk.</p></details>
        <details><summary>O bot tem suporte?</summary><p class="muted">Sim, suporte contínuo para configuração e dúvidas.</p></details>
        <details><summary>Há chat com IA?</summary><p class="muted">Sim, para ajuda com configurações e uso do bot.</p></details>
      </div>
    </section>

    <section>
      <h2 class="section-title">Chat com IA Veltrix</h2>
      <div class="card">
        <p class="muted">Digite sua pergunta sobre o Veltrix...</p>
        <input type="text" placeholder="Digite sua pergunta sobre o Veltrix..." />
      </div>
    </section>

    <section id="discord">
      <h2 class="section-title">Pronto para entrar?</h2>
      <div class="card">
        <p class="muted">Convide o Veltrix para seu servidor e comece agora.</p>
        <a class="btn" href="#">Adicionar ao Discord</a>
      </div>
    </section>

    <footer>
      <div class="grid2">
        <div>
          <strong style="color:#fff">Veltrix</strong>
          <p>Bot premium para comunidades Discord.</p>
        </div>
        <div>
          <strong style="color:#fff">Newsletter</strong>
          <input type="email" placeholder="seu@email.com" />
        </div>
      </div>
    </footer>
  </main>
</body>
</html>

