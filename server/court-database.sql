create database if not exists court;

use court;

DROP TABLE news;

CREATE TABLE IF NOT EXISTS news (
    NewsID INT(5) NOT NULL AUTO_INCREMENT,
    Title VARCHAR(200) NOT NULL,
    Content VARCHAR(2000) NOT NULL,
    Date DATETIME NOT NULL,
    Image VARCHAR(50) NOT NULL,
    PRIMARY KEY (NewsID)
);

CREATE TABLE IF NOT EXISTS coach (
    CoachID INT(5) NOT NULL AUTO_INCREMENT,
    Name VARCHAR(30) NOT NULL,
    VorName VARCHAR(30) NOT NULL,
    SchoolName VARCHAR(50),
    Description VARCHAR(2000) NOT NULL,
    PriceHour INT(5) NOT NULL,
    Image VARCHAR(50) NOT NULL,
    PRIMARY KEY (CoachID)
);


INSERT INTO news(Title, Content, Date, Image) VALUES
 ("Former Manchester United striker", "Dwight Yorke, the former Manchester United striker, was denied entry to the United States as he had an Iranian stamp on his passport. The 45-year-old was travelling to his home country of Trinidad and Tobago via the United States when the incident occurred. Yorke works as an ambassador for United, representing his former club in charity matches and commercial events. On the journey in question, Yorke was travelling on personal business. It is often said that Arsenal would be ‘unimaginable’ without Arsene Wenger but many aspects of the club are very imaginable indeed if Wenger does not sign a new contract beyond this season. Rather than being one man’s personal project, Arsenal would be returned to the ranks of normal clubs, as Manchester United now have  been, where managers come and go, but the players stick around. It is a very different dynamic and one which the United players, with just one FA Cup since Sir Alex Ferguson retired, have struggled to adjust to.", now(), "./images/tennis-family.jpg"),
 ("Arsenal's 'British core' still has a future at the club - but only", "It is often said that Arsenal would be ‘unimaginable’ without Arsene Wenger but many aspects of the club are very imaginable indeed if Wenger does not sign a new contract beyond this season. Rather than being one man’s personal project, Arsenal would be returned to the ranks of normal clubs, as Manchester United now have  been, where managers come and go, but the players stick around. It is a very different dynamic and one which the United players, with just one FA Cup since Sir Alex Ferguson retired, have struggled to adjust to.No-one knows who the Arsenal manager will be next season but we do have a good idea who the players will be. And while everyone at Arsenal does owe his career there to Wenger, there are some players who could well perform better with a new man in charge.Much was made of Arsenal’s ‘British core’ when a cohort of teenagers were signed or brought through at the end of the last decade and the start of this one. And yet the reality as those players head into their mid-20s is they have not become the players Arsenal were hoping for.", now(), "./images/tennis-family2.jpg"),
 ("How video analysis helped take Lincoln City to the top of the league", "Lincoln City of the National League knocked out Championship sides Ipswich Town and Brighton and Hove Albion in the previous two rounds of the FA Cup and now stand on the verge of reaching the last eight for the first time in the club’s storied 133-year history. Just don’t mention the magic of the cup. Those who rush unimaginatively to ascribe the club’s success to that oft-used cliche risk doing Danny Cowley’s team a grave disservice. Because every minute detail in Lincoln’s fine run of form, which has seen them rise to the top of the National League while reaching the fifth round of the FA Cup for the first time since 1887, has, in fact, been exactingly planned. Whisper it quietly, but this season there has been a minor revolution in the application of video analysis in football at the rather unlikely location of Sincil Bank, which has provided the foundation of the club's remarkably rapid improvement.Perennial underachievers — a record 104 seasons spent languishing in the Football League without reaching the top tier is just one of the club’s unwanted distinctions — something clicked at Lincoln when, towards the end of last season, the club appointed Cowley from part-timers Braintree Town. Two Cowleys, in fact, as Danny’s brother, Nicky, was appointed assistant manager. And the brothers also brought with them a uniquely progressive attitude to performance analysis, inspired by their usage of a video review tool called Hudl.", now(), "./images/tennis-news-image.jpg");

 INSERT INTO coach(Name, VorName, SchoolName, Description, PriceHour, Image) VALUES
 ("Carlos", "Rodrigues", "Tennis Everyday", "It is often said that Arsenal would be ‘unimaginable’ without Arsene Wenger but many aspects of the club are very imaginable indeed if Wenger does not sign a new contract beyond this season. Rather than being one man’s personal project, Arsenal would be returned to the ranks of normal clubs, as Manchester United now have  been, where managers come and go, but the players stick around.", 50, './images/tennis-coach2.jpg'),
 ("Mike", "Roberts", null, "It is often said that Arsenal would be ‘unimaginable’ without Arsene Wenger but many aspects of the club are very imaginable indeed if Wenger does not sign a new contract beyond this season.", 30, './images/tennis-coach3.jpg'),
 ("Santa", "Clara", "Junior Tennis", "It is often said that Arsenal would be ‘unimaginable’ without Arsene Wenger but many aspects of the club are very imaginable indeed if Wenger does not sign a new contract beyond this season. Rather than being one man’s personal project, Arsenal would be returned to the ranks of normal clubs, as Manchester United now have  been, where managers come and go, but the players stick around. Rather than being one man’s personal project, Arsenal would be returned to the ranks of normal clubs, as Manchester United now have  been, where managers come and go, but the players stick around.", 35, './images/tennis-coach4.png');