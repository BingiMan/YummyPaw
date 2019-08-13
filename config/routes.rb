Rails.application.routes.draw do
  resources :users do
    resources :pets do
      resources :comments
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
