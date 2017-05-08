export function typeDefGenerator(type = '') {
  function capitalize(str) {
    const newString = String.new(str);
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  }

  return `
enum ACTION_TYPE {

  # Represents a Like.
  LIKE
}

enum ASSET_METRICS_SORT {

  # Represents a LikeAction.
  LIKE
}

input CreateLikeInput {

  # The item's id for which we are to create a like.
  item_id: ID!

  # The type of the item for which we are to create the like.
  item_type: ACTION_ITEM_TYPE!
}

# LikeAction is used by users who "like" a specific entity.
type LikeAction implements Action {

  # The ID of the action.
  id: ID!

  # The author of the action.
  user: User

  # The time when the Action was updated.
  updated_at: Date

  # The time when the Action was created.
  created_at: Date
}

type LikeActionSummary implements ActionSummary {

  # The count of actions with this group.
  count: Int

  # The current user's action.
  current_user: LikeAction
}

# A summary of counts related to all the Likes on an Asset.
type LikeAssetActionSummary implements AssetActionSummary {

  # Number of likes associated with actionable types on this this Asset.
  actionCount: Int

  # Number of unique actionable types that are referenced by the likes.
  actionableItemCount: Int
}

type CreateLikeResponse implements Response {

  # The like that was created.
  like: LikeAction

  # An array of errors relating to the mutation that occurred.
  errors: [UserError]
}

type RootMutation {

  # Creates a like on an entity.
  createLike(like: CreateLikeInput!): CreateLikeResponse
}

`;
}