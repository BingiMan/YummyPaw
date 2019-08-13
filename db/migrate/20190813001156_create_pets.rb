class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :title
      t.boolean :is_cat
      t.string :video_url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
