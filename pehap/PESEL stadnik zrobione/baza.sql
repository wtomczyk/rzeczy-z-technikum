-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Wrz 2018, 18:58
-- Wersja serwera: 10.0.17-MariaDB
-- Wersja PHP: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kantor`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kursy`
--

CREATE TABLE `kursy` (
  `id_kurs` int(11) NOT NULL,
  `data` date NOT NULL,
  `skup` float NOT NULL,
  `sprzedaz` float NOT NULL,
  `id_waluta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `kursy`
--

INSERT INTO `kursy` (`id_kurs`, `data`, `skup`, `sprzedaz`, `id_waluta`) VALUES
(1, '2018-08-19', 4.22, 4.3, 1),
(2, '2018-08-19', 3.6, 3.67, 2),
(3, '2018-08-19', 3.69, 3.81, 3),
(4, '2018-08-19', 4.71, 4.8, 4),
(5, '2018-08-21', 4.25, 4.32, 1),
(6, '2018-08-21', 3.69, 3.79, 2),
(7, '2018-08-21', 3.65, 3.8, 3),
(8, '2018-08-21', 4.62, 4.76, 4),
(9, '2018-08-29', 4.29, 4.38, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `waluty`
--

CREATE TABLE `waluty` (
  `id_waluta` int(11) NOT NULL,
  `nazwa` text COLLATE utf16_polish_ci NOT NULL,
  `skrot` text COLLATE utf16_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `waluty`
--

INSERT INTO `waluty` (`id_waluta`, `nazwa`, `skrot`) VALUES
(1, 'euro', 'EUR'),
(2, 'dolar', 'USD'),
(3, 'frank szwajcarski', 'CHF'),
(4, 'funt brytyjski', 'GBP');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `kursy`
--
ALTER TABLE `kursy`
  ADD PRIMARY KEY (`id_kurs`);

--
-- Indexes for table `waluty`
--
ALTER TABLE `waluty`
  ADD PRIMARY KEY (`id_waluta`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `kursy`
--
ALTER TABLE `kursy`
  MODIFY `id_kurs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT dla tabeli `waluty`
--
ALTER TABLE `waluty`
  MODIFY `id_waluta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
