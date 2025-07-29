export interface UserResponse {
    data:    UserIndiv;
    support: Support;
}

export interface UserIndiv {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
