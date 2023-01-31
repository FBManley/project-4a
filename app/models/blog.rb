class Blog < ApplicationRecord
    validates :title, presence: true
    validates :content, presence: true
    # validate :title_must_start_with_c
    # def starts_with_c
    #     if self.title.blank? && [0].downcase != "C"
    #         errors.add(:title, "must start with C")
    #     end
    # end
end
