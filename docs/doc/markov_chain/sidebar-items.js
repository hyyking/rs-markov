initSidebarItems({"macro":[["sq_matrix","Generate code for a quare matrix with name, order and inner type # Example: `rust vector!(Vec3, 3) // vector!(name, order) sq_matrix!(Matrix3[3], Vec3) // matrix!(name[order], inner_type) main() { let mat3 = Matrix3::new( [[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0]] ); let vec3 = Vec3::new([1.0, 2.0, 3.0]); assert_eq!(mat3 * vec3, vec3); }`"],["vector","Generate code for a vector with name and order # Example: ```rust vector!(Vec3, 3)  // vector!(Name, Order) vector!(Vec5, 5)  // vector!(Name, Order) main() {    let vec3_1 = Vec3::new([0.0, 0.0, 0.0]);    let vec3_2 = Vec3::new([1.0, 1.0, 1.0]);    let mul = vec3_1 * vec3_2; // 0.0"]],"mod":[["alg","Algebra module for MarkovChains"]],"struct":[["MarkovChain3","MarkovChain with three nodes"]]});