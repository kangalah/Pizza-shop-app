$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);


        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };


        let price, totalPrice;
        switch (flavour) {
            case flavour = "regpiz":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Mega":
                        price = 1350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                }
                break;
            case flavour = "spicychicken":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "spicyboere":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                        break;
                      }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                       case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "meatdel":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "regpiz":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "vegfeast":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "roastveg":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "mushpizz":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
            case flavour = "tikka":
                switch (size) {
                    case size = "Regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "Large":
                        price = 1050;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                        case size = "Mega":
                            price = 1350;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 250;
                            }
                            break;
                }
                break;
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 50;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 50;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 90;
                break;
            case topping = "greenpep":
                totalPrice = totalPrice + 60;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 120;
                break;
            case topping = "pineapples":
                totalPrice = totalPrice + 120;
                break;
            case topping = "bacon":
                totalPrice = totalPrice + 150;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 180;
                break;
            case topping = "veg":
                totalPrice = totalPrice + 50;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 110;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 180;
                break;
            case topping = "cheese":
                totalPrice = totalPrice + 150;
                break;
            case topping = "spice":
                totalPrice = totalPrice + 90;
                break;
        }


        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder);





        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :  " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :   "
            + newOrder.c + "<br>" + "Toppings :   "
            + newOrder.t + "<br>" + " Number of pizzas : "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });


    $(".deliver").click(function() {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });



    $(".delivernot").click(function () {

    });



});
