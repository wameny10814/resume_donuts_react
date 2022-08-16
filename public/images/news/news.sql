-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-08-16 13:22:36
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `mid-proj1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

CREATE TABLE `news` (
  `sid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `type` int(11) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `news`
--

INSERT INTO `news` (`sid`, `title`, `content`, `pic`, `start`, `end`, `type`, `created_at`) VALUES
(1, '元宵節 一起「糰圓」吃圓圓', '冷吱吱的元宵節\r\n94要吃的圓滾滾的才不怕冷\r\n⠀\r\n 日式醬油糰子 \r\n\r\n白胖胖的 #Ｑ彈糰子 x 關東風日式醬油\r\n鹹甜鹹甜的滋味～美味しい (*´꒳`*)\r\n⠀\r\n●● #柚香糰子 ●●\r\n⠀\r\n使用 日本高知縣產柚子\r\n從外皮到內餡呈現金黃恬雅的柚子風味✨', 'ece4581130f15d25a918d716bf40144f.jpg', '2022-02-15', '2022-06-15', 1, '2022-02-14'),
(2, '可可控 集合啦！ 全新登場！香濃 #可可蛋糕圈', '✧✦ 餅乾可可蛋糕圈 ✦✧\r\n可可餅乾碎片 x #Ｑ軟 可可蛋糕圈\r\n豐富口感✨就像濃郁布朗尼般美味\r\n⠀\r\n✧✦ 草莓可可蛋糕圈 ✦✧\r\n草莓巧克力醬 x 濃郁可可蛋糕圈\r\n香甜濃郁 的完美搭配\r\n', '5f1b85b9996483dde0074c37b2f5e085.jpg', '2022-02-20', '2022-02-20', 1, '2022-02-19'),
(3, 'Mister Donut 跟你一起 愛的分享', '新登場的 #濃郁系 蜜糖波堤\r\n以及全新der #濃可可瑪芬\r\n⠀\r\n濃郁不甜膩～甜點控千萬別錯過( ง⁼̴̀ω⁼̴́)ง⁼³₌₃', 'cc22bc46576321251efcadcd396d0b3b.jpg', '2022-02-22', '2022-06-28', 2, '2022-02-21'),
(4, '濃濃濃 #濃系列 甜甜圈新上市', '厚豆香蜜糖波堤 \r\n濃郁的 #黑須豆香粉 x 脆脆的糖衣\r\n香氣厚實 #愛豆香波堤的朋友一定要試試', '0c09c1de17b130f0f834c27527e8195a.jpg', '2022-02-22', '2022-02-22', 1, '2022-02-21'),
(5, 'Mister Donut x 牛角日本燒肉專門店Taiwan Gyu-Kaku  最 強 燒 肉 系 點 心  即將登場！！！', '使用 #牛角獨家醬汁\r\n『 秘傳鹽蔥醬 』以及『 香濃青醬 』\r\n加入 #精選牛五花與 #鮮嫩燻雞肉\r\n推出 超 濃 郁 燒 肉 系 點 心 \r\n\r\n⠀\r\n搭配全新 #波堤手撕麵包＆#北海道酥皮\r\nＱ軟有嚼勁 ( ⸝⸝˘????˘⸝⸝) 還有 滿滿滿の酥香', 'cb1a54accdf85111f54c6f95a33bdbc7.jpg', '2022-02-24', '2022-02-24', 3, '2022-02-23'),
(6, '來顆 #濃系列 甜甜圈犒賞一下吧(✪▽✪*)･｡✧', '厚 豆 香 蜜 糖 波 堤\r\n⠀\r\n濃郁的 #黑須豆香粉 x 脆脆的糖衣\r\n香氣厚實    每一口都 #超濃郁\r\n⠀\r\n #豆香波堤的粉絲們必須吃', 'f87725e08a7fffd204866903c0d00274.jpg', '2022-02-25', '2022-02-25', 1, '2022-02-24'),
(7, '注 意 囉 !! 超殺優惠登場！ 大家手刀準備好ᕕ( ᐛ )ᕗ', '在 Uber Eats 訂購 Mister Donut\r\n⠀\r\n甜甜圈 買10送10 ', '94b43df44ed29327b69c16bb1ab5b60c.jpg', '2022-03-08', '2022-03-08', 2, '2022-03-08'),
(8, '春季 #新品開箱體驗　 開 跑 囉！', '這次將邀請 20 位 親愛der粉絲們\r\n一起開箱這次的超美味新品 ✧◝(⁰▿⁰)◜✧\r\n\r\n\r\n＊本表單僅為報名，不代表報名成功，名單將另行公布。\r\n＊統一多拿滋保留調整活動內容之權利。', '066b3ed8a94c175a2a8de34c4d034cfc.jpg', '2022-03-03', '2022-03-09', 1, '2022-03-08'),
(9, '女 王 駕 到    獻上 #甜蜜優惠', '女王們　　一起到 Mister Donut 享受一下\r\n來個甜甜の下午茶 #犒賞辛苦的自己 ', '7fcd80874db86de4022cede8783bcdaa.jpg', '2022-03-08', '2022-03-14', 2, '2022-03-13'),
(10, '白色情人節倒數3天啦  #大福系波堤 甜蜜優惠登場‼', '紅 豆 草 莓 大 福 波 堤 \r\n⠀\r\nＱ彈外皮 x 軟Ｑ草莓波堤\r\n搭配滑順 #草莓鮮奶油 #日式紅豆內餡\r\n⠀\r\n天 使 草 莓 大 福 波 堤', '41c9a3721697f18b63027cfd47ffbc4d.jpg', '2022-03-12', '2022-03-15', 2, '2022-03-14'),
(12, 'Mister Donut x 一〇八抹茶茶廊', '攜手 108 MATCHA SARO 一〇八抹茶茶廊 Taiwan\r\n打造日本正統的『 雙 茶 饗 宴 』\r\n⠀\r\n嚴選 #京都宇治一番茶\r\n打造茶韻甘醇的『抹茶系列』\r\n還有‼全新『焙茶系列』\r\n獨特的 #濃厚茶香 你絕對會愛上♡', 'b12f98783e565e5b1be46b22e915782d.jpg', '2022-03-22', '2022-03-27', 3, '2022-03-26'),
(13, 'Mister Donut x 一〇八抹茶茶廊', '首次聯名 108 MATCHA SARO 一〇八抹茶茶廊 Taiwan\r\n經由 #品牌總經理 山本將人 監修確認、共同創作\r\n推出 9 款茶香濃厚的 #茶系列 甜甜圈', '4145b0314ca916f7a3e5bd50cc7b9c41.jpg', '2022-03-22', '2022-03-27', 3, '2022-03-26'),
(14, '週一的不開心，就靠 #甜甜圈來消除', '#週一限定 去去憂鬱走\r\n用 foodomo 訂購 Mister Donut 甜甜圈\r\n買 8 送 4 　買 8 送 4 　買 8 送 4  1', '46658639cf3ef3c12c49ef468dfb56b3.jpg', '2022-03-28', '2022-03-28', 2, '2022-03-28'),
(15, '週五派對模式 啟動啦  買 20 送 10  #要買要快 ', '超殺優惠 不要錯過啦啦啦～\r\n動動手指下訂吧', '46c1f74fe65d459d32ab1225e733160f.jpg', '2022-04-15', '2022-04-15', 2, '2022-04-12');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `news`
--
ALTER TABLE `news`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
