import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PostModel } from "../../Models/PostModel";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackRoutes } from "../../Routes/HomeRoutes";
import { useNavigation } from "@react-navigation/native";

interface HomeListItemProps {
  post: PostModel
}

type ScreenProps = NativeStackNavigationProp<HomeStackRoutes, 'HomePage'>

export const HomeListItem = ({ post }: HomeListItemProps) => {

  const navigation = useNavigation<ScreenProps>()

  const handleOpenPost = () => {
    navigation.push('PostPage', { post })
  }

  return (
    <TouchableOpacity onPress={handleOpenPost}>
      <View style={styles.container}>
        <Text>{post.title}</Text>
        <View style={styles.postInfoContainer}>
          <Text style={styles.postInfo}>
            <Text>{post.tabcoins}</Text>
            <Text> Tabcoins</Text>
          </Text>
          <Text style={styles.postInfo}>
            <Text>{post.children_deep_count}</Text>
            <Text> Comentarios</Text>
          </Text>
          <Text style={styles.postInfo}>{post.owner_username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}