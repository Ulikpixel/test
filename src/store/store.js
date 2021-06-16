import { configure, makeAutoObservable } from "mobx";
import moment from "moment";
import { similarFilter } from "../utils/similarFilter";
configure({ enforceActions: "observed" });

class Store {
    school = "Онлайн школа"
    color = "red"
    type = "Академические"
    totalHour = 1
    hourDay = 1
    weeks = []
    break = 0
    audience = null
    teacher = null
    constructor() {
        makeAutoObservable(this);
        this.setTotalHour = this.setTotalHour.bind(this);
        this.setHourDay = this.setHourDay.bind(this);
    }
    setSchool(text) {
        this.school = text;
    }
    setColor(color) {
        this.color = color;
    }
    setTotalHour(count) {
        this.totalHour = count <= 0 ? 1 : count;
    }
    setHourDay(count) {
        if (count <= 0) {
            this.hourDay = 1;
        } else if (count > this.totalHour) {
            this.hourDay = this.totalHour
        } else {
            this.hourDay = count
        }
    }
    setType(type) {
        this.type = type;
    }
    changeWeeks(week) {
        if (week === "ПН/СР/ПТ") {
            this.weeks = ["ПН", "СР", "ПТ"];
        }
        if (week === "ВТ/ЧТ") {
            this.weeks = ["ВТ", "ЧТ"];
        }
        this.weeks = similarFilter(this.weeks, week);
    }
    setBreak(time) {
        this.break = time;
    }
    setAudience(num) {
        this.audience = num;
    }
    setTeacher(name) {
        this.teacher = name;
    }
    get allWeeks() {
        return Object.values(this.weeks);
    }
    get status() {
        return this.weeks.length ? true : false;
    }
    get date() {
        const totalDays = Math.ceil(this.totalHour / this.hourDay / this.weeks.length) * 7;
        const toDate = moment().add(totalDays === Infinity ? 0 : totalDays, "d").format("DD.MM.YYYY");
        const fromDate = moment().format("DD.MM.YYYY");
        return { from: fromDate, to: toDate };
    }
    get time() {
        // to time
        const typeHour = this.type === "Академические" ? 45 : 60;
        const breaks = this.break * (this.hourDay - 1);
        const minutes = this.hourDay * typeHour + breaks;
        const toTime = moment().add(minutes, 'minutes').format("HH.mm");
        // from time 
        const fromTime = moment().format("HH.mm");
        return { from: fromTime, to: toTime };
    }
    get schedule() {
        return {
            school: this.school,
            color: this.color,
            typeTraining: this.type,
            time: this.time,
            date: this.date,
            weeks: this.allWeeks,
            break: this.break,
            audience: this.audience,
            teacher: this.teacher,
            date: this.date,
            time: this.time,
        }
    }
}

const store = new Store();
export default store;

