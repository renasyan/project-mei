"use client";

import { Text, TextInput, TouchableOpacity, View } from "react-native";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// const formSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(8),
// });

const loginPage = () => {
  console.log("loginPage");

  // // 1. Define your form.
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  // 3. const for visible password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white py-24 px-8">
      <Text className="text-2xl font-bold text-center">Selamat Datang 👋🏻</Text>
      <Text className="text-sm font-normal text-center">
        Masuk dengan akun yang telah terdaftar!
      </Text>
      <View className="my-14 gap-6">
        <View className="">
          <Text className="text-xs"> Email </Text>
          <TextInput
            style={{ borderBottomColor: "#00B4D8", borderBottomWidth: 1 }}
            placeholder="starticas@gmail.com"
            // {...form.register("email")}
          />
        </View>
        <View className="">
          <Text className="text-xs"> Password </Text>
          <TextInput
            style={{
              borderBottomColor: "#00B4D8",
              borderBottomWidth: 1,
              borderWidth: 0,
            }}
            placeholder="alamak123"
            secureTextEntry={!isPasswordVisible}
            // {...form.register("password")}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute right-0 top-0 p-4"
          >
            <Text>{isPasswordVisible ? "👁️" : "👁️"}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="flex">
          <Text
            className="text-xs "
            style={{
              textAlign: "right",
              color: "#00B4D8",
            }}
          >
            Lupa Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={form.handleSubmit(onSubmit)}
          className="bg-baseColor p-4 rounded-2xl"
          style={{ marginTop: 40, backgroundColor: "#00B4D8" }}
        >
          <Text className="text-white text-center text-base font-medium">
            Masuk
          </Text>
        </TouchableOpacity>
        <View className="bg-baseColor p-4 rounded-2xl">
          <TouchableOpacity
            // onPress={form.handleSubmit(onSubmit)}
            style={{ marginTop: 40, backgroundColor: "#00B4D8" }}
          >
            <Text className="text-white text-center text-base font-medium">
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text className="text-center">atau masuk dengan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default loginPage;
