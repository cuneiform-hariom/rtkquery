import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const studentApi = createApi({
    reducerPath: "studentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://65ba036eb4d53c066551d26a.mockapi.io/",
    }),

    tagTypes: ["Students"],

    endpoints: (builder) => ({
        getStudents: builder.query({
            query: () => "students",
            providesTags: ["Students"]
        }),
        addStudent: builder.mutation({
            query: (students) => ({
                url: "students",
                method: "POST",
                body: students
            }),
            invalidatesTags: ["Students"]
        }),
        deleteStudent: builder.mutation({
            query: (id) => ({
                url: `students/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Students"],
        })
    })
})

export const { useGetStudentsQuery, useAddStudentMutation, useDeleteStudentMutation } = studentApi