# O que é um changelog?
Um changelog é um arquivo que contém uma lista selecionada, ordenada cronologicamente, de mudanças significativas para cada versão de um projeto.
# Por que manter um changelog?
Para facilitar que usuários e contribuidores vejam precisamente quais mudanças significativas foram realizadas entre cada versão publicada de um projeto.
# Quem precisa de um changelog?
Pessoas precisam. Seja consumidores ou desenvolvedores, os usuários finais de softwares são seres humanos que se preocupam com o que está no software. Quando o software muda, as pessoas querem saber por que e como.
# Como fazer um bom changelog?
#### Princípios fundamentais
- Changelogs são _para humanos_, não máquinas.
Deve haver uma entrada para cada versão.
- Alterações do mesmo tipo devem ser agrupadas. Versões e seções devem ser vinculáveis (com links).
- A versão mais recente vem em primeiro lugar.
- A data de lançamento de cada versão é exibida.
- Mencione se você segue o (versionamento semântico)[https://semver.org/].
#### Tipos de mudanças
- `Adicionado` para novas funcionalidades.
- `Modificado` para alterações em funcionalidades existentes.
- `Obsoleto` para funcionalidades que estão para ser removidas.
- `Removido` para funcionalidades removidas nesta versão.
- `Corrigido` para qualquer correção de bug.
- `Segurança` em caso de vulnerabilidades.
# Como eu posso minimizar o esforço exigido para manter um changelog?
Mantenha sempre uma seção `Não publicado` no topo para rastrear alterações vindouras.

Isso serve a dois propósitos:

- As pessoas podem ver quais mudanças elas podem esperar em publicações futuras.
- No momento da publicação, você pode mover a seção de mudanças `Não publicado` como uma seção para uma nova publicação.

# Os changelogs podem ser ruins?
Sim. Aqui estão algumas maneiras pelas quais eles podem ser inúteis.

#### Diffs de registros de commits
Utilizar diffs de registros de commits como changelogs é uma má ideia: eles estão cheios de bagunça. Coisas como commits de mesclagem, commits com títulos estranhos, alterações de documentação etc.

O propósito de um commit é documentar a etapa na evolução do código fonte. Alguns projetos limpam os commits, outros não.

O propósito de uma entrada de changelog é documentar as diferenças notáveis, muitas vezes de múltiplos commits, para comunicá-las de forma clara aos usuários.

#### Ignorando descontinuações
Quando pessoas atualizam de uma versão para outra, deve ficar muitíssimo claro quando algo vai quebrar. Deve ser possível atualizar para uma versão que liste descontinuações, remova o que foi descontinuado, e então atualize para a versão em que descontinuações foram removidas.

Se você não fizer mais nada, liste no seu changelog as depreciações, remoções e quaisquer mudanças que gerem falhas.

#### Datas confusas
Os formatos regionais de data variam em todo o mundo e muitas vezes é difícil encontrar um formato de data amigável que seja intuitivo para todos. A vantagem das datas formatadas como `2017-07-17` é que elas seguem a ordem da maior para a menor unidade de tempo: ano, mês e dia. Este formato também não se confunde de maneira ambígua com outros formatos de data, ao contrário de alguns formatos regionais que alteram a posição dos números do mês e dia. Esses motivos, e o fato de ser um formato de data suportado pela (norma ISO)[https://www.iso.org/iso-8601-date-and-time-format.html] são as razões para ele ser o formato de data recomendado para as entradas do changelog.

#### Alterações Inconsistentes
Um changelog que apenas menciona algumas das alterações pode ser tão perigoso quanto não ter um changelog. Enquanto muitas das alterações talvez não sejam relevantes - como por exemplo remover um único espaço em branco talvez não necessite ser registrado todas as vezes - qualquer alteração importante deve ser mencionada no changelog. Por registrar alterações de forma inconsistente, seus usuários podem pensar, incorretamente, que o changelog é a fonte única de verdade. Deveria ser. Com grandes poderes vem grandes responsabilidade - ter um bom changelog siginifica ter um changelog consistentemente atualizado.