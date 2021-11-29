"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.find = exports.findAll = void 0;
const messages = {};
const findAll = async () => Object.values(messages);
exports.findAll = findAll;
const find = async (id) => messages[id];
exports.find = find;
const create = async (newMessage) => {
    const id = new Date().valueOf();
    messages[id] = Object.assign({ id }, newMessage);
    messages[id].palindrome = isPalindrome(messages[id].message);
    return messages[id];
};
exports.create = create;
const update = async (id, itemUpdate) => {
    const message = await (0, exports.find)(id);
    if (!message) {
        return null;
    }
    messages[id] = Object.assign({ id }, itemUpdate);
    return messages[id];
};
exports.update = update;
const remove = async (id) => {
    const message = await (0, exports.find)(id);
    if (!message) {
        return null;
    }
    delete messages[id];
};
exports.remove = remove;
const isPalindrome = (message) => {
    let palindrome = false;
    if (message) {
        const text = message;
        const textArr = text.split("");
        const textArrReverse = [...textArr];
        textArrReverse.reverse();
        for (let index = 0; index < (textArr.length) / 2; index++) {
            if (textArr[index] !== textArrReverse[index]) {
                return palindrome;
            }
        }
        palindrome = true;
    }
    return palindrome;
};
//# sourceMappingURL=messages.service.js.map