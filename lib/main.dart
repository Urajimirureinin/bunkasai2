import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Chebyshev\'s method with card'),
          backgroundColor: Colors.amber,
          elevation: 10,
          shadowColor: Colors.amber,
          actions: [
            IconButton(
              icon: Icon(Icons.share),
              onPressed: () {},
            ),
            IconButton(
              icon: Icon(Icons.more_vert),
              onPressed: () {},
            ),
          ],
        ),
        body: RectangleGrid(),
      ),
    );
  }
}

class RectangleGrid extends StatefulWidget {
  @override
  _RectangleGridState createState() => _RectangleGridState();
}

class _RectangleGridState extends State<RectangleGrid> {
  final List<int> tappedIndices = [];
  final List<int> tappedNumbers = [];
  final Random random = Random();
  int gcd1Count = 0;
  int totalGcdChecks = 0;

  void handleTap(int index) {
    if (tappedNumbers.length < 2 && !tappedIndices.contains(index)) {
      int number = random.nextInt(54) + 1;
      setState(() {
        tappedIndices.add(index);
        tappedNumbers.add(number);
      });

      if (tappedNumbers.length == 2) {
        totalGcdChecks++;
        int gcdResult = gcd(tappedNumbers[0], tappedNumbers[1]);
        if (gcdResult == 1) {
          gcd1Count++;
        }

        String message = gcdResult == 1
            ? '二つの数は互いに素です。'
            : '二つの数は互いに素ではありません。最大公約数は$gcdResultです';

        double gcd1Probability = (gcd1Count / totalGcdChecks) * 100;

        String markText(int number) {
          int quotient = number ~/ 13;
          int remainder = number % 13;
          String mark;
          switch (quotient) {
            case 0:
              mark = '♤';
              break;
            case 1:
              mark = '♧';
              break;
            case 2:
              mark = '♢';
              break;
            case 3:
              mark = '♡';
              break;
            default:
              mark = '';
              break;
          }
          if (number == 53 || number == 54) {
            return 'Joker';
          } else if (remainder != 0) {
            return '$remainder$mark';
          } else {
            remainder = 13;
            switch (quotient) {
              case 1:
                mark = '♤';
                break;
              case 2:
                mark = '♧';
                break;
              case 3:
                mark = '♢';
                break;
              case 4:
                mark = '♡';
                break;
              default:
                mark = '';
                break;
            }
            return '$remainder$mark';
          }
        }

        double calcuratedPi = sqrt(600 / gcd1Probability);

        showDialog(
          context: context,
          builder: (context) => WillPopScope(
            onWillPop: () async {
              return false;
            },
            child: AlertDialog(
              title: const Text('Result'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(message),
                  const SizedBox(height: 20),
                  Text('条件を満たした回数: $gcd1Count'),
                  Text('総試行回数: $totalGcdChecks'),
                  Text('条件の確率: ${gcd1Probability.toStringAsFixed(2)}%'),
                  Text('π: ${calcuratedPi.toStringAsFixed(4)}'),
                  const SizedBox(height: 20),
                  Text('1枚目に引いたカード: ${markText(tappedNumbers[0])}'),
                  Text('2枚目にひいたカード: ${markText(tappedNumbers[1])}'),
                ],
              ),
              actions: [
                TextButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                    setState(() {
                      tappedIndices.clear();
                      tappedNumbers.clear();
                    });
                  },
                  child: const Text('OK'),
                ),
              ],
            ),
          ),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 6,
        childAspectRatio: 62 / 90, // トランプの画像の縦横比に合わせる
      ),
      itemCount: 54,
      itemBuilder: (context, index) {
        return GestureDetector(
          onTap: () => handleTap(index),
          child: Container(
            margin: const EdgeInsets.all(4),
            decoration: BoxDecoration(
              image: const DecorationImage(
                image: NetworkImage(
                  'https://us.123rf.com/450wm/bobyramone/bobyramone1205/bobyramone120500002/13612253-%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%81%AE%E3%82%AB%E3%83%BC%E3%83%89%E3%81%AE%E8%A3%8F%E9%9D%A2-62-x-90-mm.jpg?ver=6',
                ),
                fit: BoxFit.cover,
              ),
              border: Border.all(color: Colors.black, width: 2), // 枠線
            ),
            child: Stack(
              children: [
                Center(
                  child: Text(
                    '${index + 1}',
                    style: const TextStyle(color: Colors.white, fontSize: 24),
                  ),
                ),
                if (tappedIndices.contains(index))
                  Image.asset(
                    'images/${tappedNumbers[tappedIndices.indexOf(index)]}.png',
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return const Center(
                        child: Text(
                          'Error',
                          style: TextStyle(color: Colors.red, fontSize: 24),
                        ),
                      );
                    },
                  ),
              ],
            ),
          ),
        );
      },
    );
  }

  int gcd(int a, int b) {
    while (b != 0) {
      int t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
}
