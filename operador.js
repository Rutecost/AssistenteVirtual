// --------------------------------------------
// Nome: Rute de Oliveira Costa
// Protótipo Assistente Virtual "Importadora Venus"
// --------------------------------------------

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome = "";
let tentativas = 0;

rl.question("Olá! Sou Vênus, sua assistente virtual. Qual seu nome? ", function(n) {
  nome = n;
  console.log("Oi " + nome + "! Me diz como posso te ajudar!");

  function confirmarSair(callback) {
    rl.question("\nTem certeza que quer sair? (1 - Sim / 2 - Não): ", function(confirma) {
      if (confirma == "1") {
        console.log("\nTchau " + nome + "! Volte sempre!");
        rl.close();
        return; 
      } else if (confirma == "2") {
        console.log("\nQue bom que ficou! Vamos voltar ao menu.");
        callback();
        return;
      } else {
        console.log("\nNão entendi! Vamos tentar de novo.");
        confirmarSair(callback);
        return;
      }
    });
  }

  function menu() {
    console.log("\n=== Venus Importadora - Menu ===");
    console.log("1 - Fazer uma avaliação ou reclamação");
    console.log("2 - Horário da loja");
    console.log("3 - Fazer pedido");
    console.log("4 - Sair");

    rl.question("Escolha uma opção (1-4): ", function(op) {

      if (op == "1") {
        rl.question("\nEscreva: ", function(reclamacao) {
          rl.question("Digite seu e-mail: ", function(email) {
            rl.question("Digite seu celular: ", function(celular) {
              console.log("\nRecebido!: '" + reclamacao + "'.");
              console.log("Vamos entrar em contato pelo e-mail: " + email + " ou celular: " + celular + ". Obrigado!");

              function opcaoReclamacao(attempt = 0) {
                console.log("\nO que deseja fazer agora?");
                console.log("1 - Adicionar mais informacoes");
                console.log("2 - Voltar ao menu");
                console.log("3 - Sair");
                rl.question("Escolha uma opção: ", function(resposta) {
                  if (resposta == "1") {
                    rl.question("Digite: ", function(detalhes) {
                      console.log("Recebemos os detalhes: '" + detalhes + "'.");
                      opcaoReclamacao();
                      return;
                    });
                  } else if (resposta == "2") {
                    menu();
                    return;
                  } else if (resposta == "3") {
                    confirmarSair(opcaoReclamacao);
                    return;
                  } else {
                    attempt++;
                    console.log("\nNão entendi, tente escolher 1, 2 ou 3.");
                    opcaoReclamacao(attempt);
                    return;
                  }
                });
              }

              opcaoReclamacao();
              return;
            });
          });
        });

      } else if (op == "2") {
        function opcaoHorario(attempt = 0) {
          console.log("\nHorário: 6h às 18h, segunda a sexta.");
          console.log("1 - Voltar ao menu");
          console.log("2 - Endereço da loja");
          console.log("3 - Telefone da loja");
          console.log("4 - Sair");
          rl.question("Escolha uma opção: ", function(subop) {
            if (subop == "1") {
              menu();
              return;
            } else if (subop == "2") {
              console.log("\nEndereço: Rua 2, ao lado da Rua 3, Em frente ao N1.");
              opcaoHorario();
              return;
            } else if (subop == "3") {
              console.log("\nTelefone: (21) 99900-8888");
              opcaoHorario();
              return;
            } else if (subop == "4") {
              confirmarSair(opcaoHorario);
              return;
            } else {
              console.log("\nOpção inválida, tente 1, 2, 3 ou 4!");
              opcaoHorario(attempt + 1);
              return;
            }
          });
        }
        opcaoHorario();
        return;

      } else if (op == "3") {
        function opcaoPedido(attempt = 0) {
          rl.question("\nQual produto você quer pedir? ", function(produto) {
            console.log("\nPedido do '" + produto + "' feito! :)");
            console.log("1 - Pedir outro produto");
            console.log("2 - Voltar ao menu");
            console.log("3 - Sair");
            rl.question("Escolha uma opção: ", function(subop) {
              if (subop == "1") {
                opcaoPedido();
                return;
              } else if (subop == "2") {
                menu();
                return;
              } else if (subop == "3") {
                confirmarSair(opcaoPedido);
                return;
              } else {
                console.log("\nNão entendi! Escolha 1, 2 ou 3.");
                opcaoPedido(attempt + 1);
                return;
              }
            });
          });
        }
        opcaoPedido();
        return;

      } else if (op == "3") {
        confirmarSair(menu);
        return;

      } else {
        tentativas++;
        console.log("\nOpção inválida. Por favor escolha uma opção do menu!");
        menu();
        return;
      }

    });
  }

  menu();
});
