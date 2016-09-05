function ReturnType(success, msg, id) {
    this.success = success;
    if (msg) {
        this.msg = msg;
    }
    if (id) {
        this.id = id;
    }
}

exports.ReturnType = ReturnType;