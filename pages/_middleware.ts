import { NextResponse } from "next/server"

// const signedInPages = ['/', '/playlist', '/library']
const signedInPages = [, '/playlist', '/library']

export default function middleware(req) {
    if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
        const token = req.cookies.RAY_ACCES_TOKEN
        

        if (!token) {
            const url = req.nextUrl.clone()
            url.pathname = "/signin"
            return NextResponse.redirect(url)
        } 
        // if (token) {
        //     const url = req.nextUrl.clone()
        //     url.pathname = "/test"
        //     return NextResponse.redirect(url)
        // }

    }
}