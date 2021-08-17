-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.6    Database: db_reactapp
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `chat_group`
--

LOCK TABLES `chat_group` WRITE;
/*!40000 ALTER TABLE `chat_group` DISABLE KEYS */;
INSERT INTO `chat_group` VALUES (1,'chat1',NULL,'dasdasdasd'),(2,'chat2',NULL,NULL),(3,'chat3',NULL,NULL),(4,'chat4',NULL,NULL);
/*!40000 ALTER TABLE `chat_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `chat_msgs`
--

LOCK TABLES `chat_msgs` WRITE;
/*!40000 ALTER TABLE `chat_msgs` DISABLE KEYS */;
INSERT INTO `chat_msgs` VALUES (1,1,1,'Message text example',NULL),(2,6,1,'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',NULL),(3,33,1,'Hi',NULL),(4,34,2,'Message',NULL),(5,35,2,'asjdkhasdjash',NULL),(6,73,2,'хп',NULL),(7,33,1,'sdasdasdasdasdsads',NULL);
/*!40000 ALTER TABLE `chat_msgs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1','lol','lol','2021-07-01','A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam.',NULL),(6,'user2','lol2','lol','2021-07-01','A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam.',NULL),(33,'user3','asdasd','asdasdas','2021-07-01','A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam.',NULL),(34,'user4','asdasdasd','asdasdasasd','2021-07-01','A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam.',NULL),(35,'user5','12lunat34@gmail.com','Parole@999','2021-07-01','A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam.',NULL),(70,'user6','asdas@sadas.com','Nightstalker2400','2021-07-03','A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam.',NULL),(72,'user7','12arturb34@gmail.comd','$2y$10$Z6tgPwX/ZfAur6FMlel1C.9rKsMNHW.IrXUskO/xUn7U/egCwMGP.','2021-07-03','A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam.',NULL),(73,'asdasdasdas','dsadas@sdasd.com','$2y$10$1O21IKkSWiEwCQREnfU2dO6xvn7joAkKKxZMi6OIXaU4Vvf6Idg.G','2021-07-09','A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam.',NULL),(74,'user8','asdasd@sadas.com','asd',NULL,'asdas',NULL),(75,'Artur','12arturbbbb34@gmail.com','asd','2021-07-12',NULL,NULL),(76,'ArtursBaskov','12arturb34@gmail.com','$2y$10$c3NwJGI6DVIxBqzp0o1wWu8QahqvPVJwr1evoUNfln/aAFesoXbzW','2021-07-24',NULL,NULL),(79,'ArtursBaskovs','12arturb34@gmail.commm','$2y$10$NQDnWXp2MNZuQaUNBBf1v.rmHpa1par3bWg3vaKKvpoMhWBeHUYFy','2021-07-24',NULL,NULL),(80,'adasdasd','sadasdasdasd@adasd.com','$2y$10$yzk53EMca2Y87nE9Bl3LkeClEbucLB..vSZ.kyUw/kVZja1L3TQQi','2021-07-24',NULL,NULL),(81,'ArtursBaskov1','12arturb34@gmail.com11','$2y$10$RU.s.ckG0Tp4ZBZk8HVx2eBHyFkc8/ZS5jXlD1u9kMN.SlLO1EVN6','2021-07-24',NULL,NULL),(82,'ArtursBaskov2','12arturb34@gmail.com2','$2y$10$bWGyCfoZbSUy3SA1qnjec.R8uTW.N5QfmyiFmvoYSbzoQ80yyT2e6','2021-07-24',NULL,NULL),(83,'ArtursBaskovsdd2','12arturb34@gmail.com24r4','$2y$10$21.S6kqO4ymRX0cka3VeZ.8ajo4PkmeiYma8Mvxz.E5yNsa8wh3K.','2021-07-24',NULL,NULL),(84,'ArtursBaskovsdd2as','12arturb34@gmail.comasdasdasdasdasdasdasd','$2y$10$Qg0AALMBK63Vhk82uuC0f.YY3/3ROdJ4k3SFh6DM/Nz15xa5k7QVq','2021-07-24',NULL,NULL),(85,'ArtursBaskov30078','12arturb34@gmail.comddddddd','$2y$10$CFlWAn4zJq3S3eLm26FdrO8FoS4L/jeyxROir/lV5Qb.OR5lqO.sK','2021-07-24',NULL,NULL),(86,'ArtursBaskov45645645','12arturb34@gmail.comadasdasdasd','$2y$10$p1HoYfrzV/tUzmaOb2JMCeTRe5dl.EN948Ktz8YCwxdO9W.v6l1Y2','2021-07-25',NULL,NULL),(87,'ArtursBaskov452222','12arturb34@gmail.comddddd','$2y$10$npW0Y58SZ0Xu1gXIWJv8JeriueL8qWZCR5xgIDUJQIXXCr.ncpAR.','2021-07-25',NULL,NULL),(88,'ArtursBaskov0092','12arturb34@gmail.comASS','$2y$10$SjF8G1.RotpQlYhR32sD5eZzUBcmePXHnHv8d2fiIfqNyEoKw7NQe','2021-07-25',NULL,NULL),(89,'ArtursBaskov222','12arturb34@gmail.com222232','$2y$10$9XTSz6pplf.3p3KBbaN0XOWqOtTy.girQtf4pOb/v9T0PBJCV4EHa','2021-07-25',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-17 10:14:38
