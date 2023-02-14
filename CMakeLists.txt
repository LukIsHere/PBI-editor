cmake_minimum_required(VERSION 3.12)
project(PBI_Editor VERSION 0.1.0)


add_subdirectory(libs/llcd/)

include_directories(include/)

add_executable(PBI_Editor 
    src/main.cpp
)

target_link_libraries(PBI_Editor PUBLIC llcd)