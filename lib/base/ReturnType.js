function ReturnType(success, msg, id) {
    this.success = success;
    if (msg !=null) {
        this.msg = msg;
    }
    if (id !=null) {
        this.id = id;
    }
}

exports.ReturnType = ReturnType;