import request from "@/utils/request/request";

interface loginApi {
    password: string;
    username: string;
}
interface loginApireturn {
    code: number,
    data: {
        token: string,
        tokenHead: string,
    },
    message: string,
}

export function loginApi(data: loginApi): Promise<loginApireturn> {
    return request({
        url: "/admin/login",
        method: "post",
        data,
    });
}