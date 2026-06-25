class PriorityInbox{
    constructor(){
        this.heap=[];
    }
    getScore(notification){
        return(notification.priority*100 + notification.importance*10);
    }
    insert(notification){
        this.heap.push(notification);
        this.heap.sort(
            (a,b)=>this.getScore(b)-this.getScore(a)
        );
    }
    getTop10(){
        return this.heap.slice(0,10);
    }
}
export default PriorityInbox;