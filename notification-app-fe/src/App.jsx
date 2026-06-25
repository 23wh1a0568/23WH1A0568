import {useEffect,useState} from "react";
import NotificationFilter from "./components/NotificationFilter";
import {getNotifications} from "./api/notifications";
import PriorityInbox from "./utils/priorityInbox";
function App(){
  const [topNotifications,setTopNotifications]=useState([]);
  const fetchNotifications=
    async () => {
    const data=await getNotifications();
    const unread=
      data.filter(
        notification =>
          !notification.read
      );
    logger(`Unread Count:${unread.length}`);
    const inbox=new PriorityInbox();
    unread.forEach(
      notification=>
        inbox.insert(notification)
    );
    const top10=inbox.getTop10();
    logger(
      "Top 10 Generated"
    );
    setTopNotifications(
      top10
    );
  };
  useEffect(()=>{
    fetchNotifications();
    const interval=
      setInterval(
        fetchNotifications,
        30000
      );
    return ()=>
      clearInterval(interval);
  }, []);
  return (
    <div>
      <NotificationFilter
        notifications={topNotifications}
      />
    </div>
  );
}
export default App;