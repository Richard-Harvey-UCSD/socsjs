var CourseElement = function(type, id, section, days, time, location, teacher, openSeats, seatLimit) {
    this.type = type;
    this.sectionID = id;
    this.section = section;
    this.days = days;
    this.time = time;
    this.location = location;
    this.teacher = teacher;
    this.openSeats = openSeats;
    this.seatLimit = seatLimit;

    this.waitlistSize = 0;
    this.isEnrollable = false;
}


module.exports = CourseElement;
