-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 04 Gru 2019, 12:11
-- Wersja serwera: 10.4.8-MariaDB
-- Wersja PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `wtomczyk`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pytania`
--

CREATE TABLE `pytania` (
  `id` int(11) NOT NULL,
  `tresc` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL,
  `pytanie1` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL,
  `pytanie2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL,
  `pytanie3` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL,
  `pytanie4` varchar(50) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `dobra_odpowiedz` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL,
  `poprawne_odpowiedzi` int(10) NOT NULL,
  `wszystkie_odpowiedzi` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `pytania`
--

INSERT INTO `pytania` (`id`, `tresc`, `pytanie1`, `pytanie2`, `pytanie3`, `pytanie4`, `dobra_odpowiedz`, `poprawne_odpowiedzi`, `wszystkie_odpowiedzi`) VALUES
(1, 'pytanie testowe 1', 'aaa1', 'aaa2', 'dobra odpowiedz', 'aaa4', 'dobra odpowiedz', 10, 24),
(5, 'pytanie testowe 3', 'ccc1', 'ccc2', 'to dobre', 'ccc4', 'to dobre', 8, 26),
(9, 'pytanie testowe 7', 'ggg1', 'ggg2', 'ggg3', 'poprawna', 'poprawna', 17, 63),
(23, 'pytanie testowe któreś', 'do testów to dobre', 'sasasa', 'sssas', 's', 'do testów to dobre', 10, 27),
(24, 'pytanie testowe 10', 'sss1', 'aaaaaaaaa', 'sss3', 'sss4s', 'aaaaaaaaa', 6, 16),
(25, 'pytanie testowe 11', 'aaa', 'www2', 'www3', 'www4', 'aaa', 5, 18),
(26, 'pytanie testowe 12', 'ggg', 'ggg2', 'a', 'ggg4', 'a', 8, 16),
(27, 'pytanie testowe 13', 'ggg11', 'ggg22', 'a', 'ggg44', 'a', 5, 19),
(28, 'pytanie testowe 14', 'ggg111', 'ggg222', 'ggg333', 'a', 'a', 5, 21),
(29, 'pytanie testowe 15', 'a', 'ggg22222', 'ggg33333', 'ggg44444', 'a', 8, 13),
(30, 'aaaaaaaaaaaa', 'bfdbfb', 'dfbd', 'do zaznaczenia', 'gg', 'do zaznaczenia', 5, 21),
(31, 'pytanie testowe 21', 'to te', 'dfdwf``', 'jfhf', 'c', 'to te', 6, 15);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(20) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `poprawne_odpowiedzi` int(11) NOT NULL,
  `wszystkie_odpowiedzi` int(11) NOT NULL,
  `rekord` int(11) NOT NULL,
  `wylosowane_pytania` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `poprawne_odpowiedzi`, `wszystkie_odpowiedzi`, `rekord`, `wylosowane_pytania`) VALUES
(1, 'admin', 'admin', 33, 5545, 7, ''),
(4, 'user_test3', '5ae0a304f3b999d1a4dc', 3, 354, 8, ''),
(6, 'user_test5', '5ae0a304f3b999d1a4dcc068da798cec', 4, 54, 2, ''),
(7, 'user_test6', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 34, 45, 0, ''),
(8, 'user_test7', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 3, 5, 2, ''),
(9, 'aaaaaa', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 48, 174, 10, '27,31,29,30,28,26,1,25,23,5'),
(10, 'aaaaaaa', '5d793fc5b00a2348c3fb9ab59e5ca98a', 8, 20, 4, '29,27,1,9,25,26,30,28,5,23'),
(11, 'bvcbvcbcv', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 4, 123, 1, ''),
(12, 'qwertyuiop', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 6, 1010, 5, '24,28,23,1,27,26,25,9,29,30'),
(13, 'zaq1@WSX', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 4, 10, 4, '31,23,1,26,28,30,27,24,5,9'),
(14, 'nngngfdndndtyntdyn', '4fa7d43935db9be0d70478518dc4c0c7', 5, 10, 5, ''),
(15, 'dddddd', '980ac217c6b51e7dc41040bec1edfec8', 2, 10, 2, '29,30,24,23,9,1,28,26,31,5');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `pytania`
--
ALTER TABLE `pytania`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `pytania`
--
ALTER TABLE `pytania`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
