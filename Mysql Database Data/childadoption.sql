-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Apr 16, 2022 at 07:50 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `childadoption`
--

-- --------------------------------------------------------

--
-- Table structure for table `adoptionform`
--

CREATE TABLE `adoptionform` (
  `form_no` int(11) NOT NULL,
  `adoption_reason` varchar(100) DEFAULT NULL,
  `annual_income` double DEFAULT NULL,
  `applicant_gender` varchar(50) DEFAULT NULL,
  `biological_children` varchar(50) DEFAULT NULL,
  `child_id` int(11) DEFAULT NULL,
  `company_details` varchar(70) DEFAULT NULL,
  `is_active` bit(1) NOT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `occupation` varchar(50) DEFAULT NULL,
  `pancard` varchar(50) NOT NULL,
  `permanent_address` varchar(50) DEFAULT NULL,
  `qualification` varchar(50) DEFAULT NULL,
  `response` varchar(50) DEFAULT NULL,
  `spouse_gender` varchar(50) DEFAULT NULL,
  `spouse_name` varchar(50) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adoptionform`
--

INSERT INTO `adoptionform` (`form_no`, `adoption_reason`, `annual_income`, `applicant_gender`, `biological_children`, `child_id`, `company_details`, `is_active`, `nationality`, `occupation`, `pancard`, `permanent_address`, `qualification`, `response`, `spouse_gender`, `spouse_name`, `user_id`) VALUES
(1, 'Any Reason', 8000000, 'Male', '1', 1, 'Farmer Producer Company Ltd.', b'0', 'Indian', 'Business', 'CJGTH5052Z', 'At post Nashik', 'Bsc Agriculture', 'Request Approved', 'Male', 'Bhushan', 2),
(2, 'Any Reason', 8000000, 'Male', '1', 3, 'Farmer Producer Company Ltd.', b'1', 'Indian', 'Business', 'CJGTH5052Z', 'At post Nashik', 'Bsc Agriculture', NULL, 'Male', 'Bhushan', 2);

-- --------------------------------------------------------

--
-- Table structure for table `child_details`
--

CREATE TABLE `child_details` (
  `child_id` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `blood_group` varchar(50) DEFAULT NULL,
  `colour_complexity` varchar(50) DEFAULT NULL,
  `deficiency` varchar(50) DEFAULT NULL,
  `education` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `medical_history` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `other` varchar(100) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `child_details`
--

INSERT INTO `child_details` (`child_id`, `age`, `blood_group`, `colour_complexity`, `deficiency`, `education`, `gender`, `image`, `medical_history`, `name`, `other`, `status`, `user_id`) VALUES
(1, 3, 'O+ve', 'Pale', 'No', 'UKG', 'Male', '7c1b76d9e29146928d3a731002476779', 'Healthy', 'Bhushan', 'Good Looking', 'Available', 1),
(2, 4, 'AB+ve', 'Fair', 'No', 'Nursery', 'Female', '48a6584504014ad9bf84954ed57ab5ea', 'Healthy', 'Snehal', 'Good Looking', 'Available', 1);

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `serial_id` int(11) NOT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_message` varchar(150) DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`serial_id`, `user_email`, `user_message`, `user_name`) VALUES
(1, 'golekarsandip1200@gmail.com', 'Please Accept my form', 'sandip'),
(2, 'sudhirgolekar1125@gmail.com', 'Please Accept Request', 'sandip'),
(3, 'golekarsandip1200@gmail.com', 'Accept the reaquest', 'sudhir'),
(4, 'bhusahn123@gmail.com', 'Hello bhushan', 'bhushan'),
(5, 'mahale123@gmail.com', 'hello snehal', 'snehal');

-- --------------------------------------------------------

--
-- Table structure for table `document_master`
--

CREATE TABLE `document_master` (
  `document_id` int(11) NOT NULL,
  `response` varchar(50) DEFAULT NULL,
  `address_proof` varchar(150) DEFAULT NULL,
  `identity_proof` varchar(150) DEFAULT NULL,
  `income_proof` varchar(150) DEFAULT NULL,
  `nationality_certificate` varchar(150) DEFAULT NULL,
  `non_criminal_certificate` varchar(150) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `is_active` bit(1) NOT NULL,
  `mob_number` bigint(20) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `is_active`, `mob_number`, `name`, `password`, `role`) VALUES
(1, 'golekarsandip1800@gmail.com', b'1', 9921981800, 'Sandip Golekar', 'Sandip@123', 'ADMIN'),
(2, 'gunjalbhushan97@gmail.com', b'1', 7350154017, 'Bhushan Gunjal', 'Bhushan@123', 'PARENT');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adoptionform`
--
ALTER TABLE `adoptionform`
  ADD PRIMARY KEY (`form_no`),
  ADD KEY `FKrhyv5c2d1i6vli8ndyi3j7xcx` (`user_id`);

--
-- Indexes for table `child_details`
--
ALTER TABLE `child_details`
  ADD PRIMARY KEY (`child_id`),
  ADD KEY `FKenbw3q0cssjmwklehx04x4b0k` (`user_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`serial_id`);

--
-- Indexes for table `document_master`
--
ALTER TABLE `document_master`
  ADD PRIMARY KEY (`document_id`),
  ADD KEY `FKke9w86e99ijdst1ufjsx9gksv` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adoptionform`
--
ALTER TABLE `adoptionform`
  MODIFY `form_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `child_details`
--
ALTER TABLE `child_details`
  MODIFY `child_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `serial_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `document_master`
--
ALTER TABLE `document_master`
  MODIFY `document_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adoptionform`
--
ALTER TABLE `adoptionform`
  ADD CONSTRAINT `FKrhyv5c2d1i6vli8ndyi3j7xcx` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `child_details`
--
ALTER TABLE `child_details`
  ADD CONSTRAINT `FKenbw3q0cssjmwklehx04x4b0k` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `document_master`
--
ALTER TABLE `document_master`
  ADD CONSTRAINT `FKke9w86e99ijdst1ufjsx9gksv` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
