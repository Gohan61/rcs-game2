import 'dart:math';
import 'package:web/web.dart';

void main() {
  var score = Score();
  var elements = HTMLElements();
  var controller = GameController(score, elements);
}

class Score {
  int rounds = 5;
  int playerWins = 0;
  int computerWins = 0;

  void incrementPlayerWins() {
    playerWins++;
  }

  void incrementComputerWins() {
    computerWins++;
  }
}

class GameController {
  final Score _score;
  final HTMLElements _view;

  GameController(this._score, this._view) {
    _attachEventListeners();
  }

  void _attachEventListeners() {
    _view.paperButton.onClick.listen((_) => _playRound('paper'));
    _view.rockButton.onClick.listen((_) => _playRound('rock'));
    _view.scissorButton.onClick.listen((_) => _playRound('scissors'));
    _view.newGame.onClick.listen((_) {
      _score.rounds = 5;
      _score.computerWins = 0;
      _score.playerWins = 0;
      _view.finalResult.textContent = "";
      _view.roundResult.textContent = "";
      _view.computerScore.textContent = "";
      _view.playerScore.textContent = "";
    });
  }

  void _playRound(String playerChoice) {
    if (_score.rounds != 0) {
      String computerChoice = _getComputerChoice();
      String result = _evaluateRound(playerChoice, computerChoice);
      _view.showResult(result);
      _view.playerScore.textContent = 'Player wins: ${_score.playerWins}';
      _view.computerScore.textContent = 'Computer wins: ${_score.computerWins}';
      _score.rounds--;
    }
    _gameOver();
  }

  void _gameOver() {
    if (_score.rounds == 0) {
      if (_score.playerWins > _score.computerWins) {
        _view.finalResult.textContent = 'You win the game!';
      } else {
        _view.finalResult.textContent = 'Computer wins the game';
      }
    }
  }

  String _getComputerChoice() {
    var options = ['rock', 'paper', 'scissors'];
    return options[Random().nextInt(3)];
  }

  String _evaluateRound(String playerChoice, String computerChoice) {
    if (playerChoice == computerChoice) {
      return 'Draw! nobody wins';
    }

    if (playerChoice == "rock" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "scissors" ||
        playerChoice == "scissors" && computerChoice == "rock") {
      _score.incrementComputerWins();
      return "You Lose! $computerChoice beats $playerChoice";
    }

    _score.incrementPlayerWins();
    return "You Win! $playerChoice beats $computerChoice";
  }
}

class HTMLElements {
  final HTMLButtonElement paperButton =
      document.createElement('button') as HTMLButtonElement;
  final HTMLButtonElement scissorButton =
      document.createElement('button') as HTMLButtonElement;
  final HTMLButtonElement rockButton =
      document.createElement('button') as HTMLButtonElement;
  final HTMLParagraphElement roundResult =
      document.createElement('p') as HTMLParagraphElement;
  final HTMLParagraphElement finalResult =
      document.createElement('p') as HTMLParagraphElement;
  final HTMLButtonElement newGame =
      document.createElement('button') as HTMLButtonElement;
  final HTMLDivElement scoreContainer =
      document.createElement('div') as HTMLDivElement;
  final HTMLParagraphElement playerScore =
      document.createElement('p') as HTMLParagraphElement;
  final HTMLParagraphElement computerScore =
      document.createElement('p') as HTMLParagraphElement;

  HTMLElements() {
    paperButton.textContent = 'Paper';
    scissorButton.textContent = 'Scissors';
    rockButton.textContent = 'Rock';
    newGame.textContent = 'New game';

    var nodes = [
      paperButton,
      scissorButton,
      rockButton,
      roundResult,
      scoreContainer,
      finalResult,
      newGame
    ];
    nodes.forEach((el) => document.body?.appendChild(el));

    scoreContainer.append(playerScore);
    scoreContainer.append(computerScore);
  }

  void showResult(String result) {
    roundResult.textContent = result;
  }
}
