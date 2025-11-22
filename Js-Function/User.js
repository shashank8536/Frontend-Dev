const user = {
    name: "Shashank",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();
