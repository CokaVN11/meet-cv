import psycopg2
import numpy as np
import unidecode

db_uri = "postgres://pttk_hcmus_21_user:1tuzk1DugJTHFUzXtiLbqiAX78u4nLDu@dpg-co5q82ev3ddc7394t4d0-a.singapore-postgres.render.com:5432/pttk_hcmus_21"

conn = psycopg2.connect(db_uri)

# '''
#   id: integer
#   loai: integer | 1: Cá nhân, 2: Doanh nghiệp
#   ten: varchar(50)
#   email: varchar(50)
#   diachi: varchar(50)
#   sodienthoai: varchar(50)
#   masothue: varchar(50) | null
#   nguoidaidien: varchar(100)
# '''

# n_doanhnghiep = 20
# n_canhan = 20

# first_name = ["Thuý", "Lan", "Điệp", "Liên", "Tú", "Hương", "Hạnh", "Hoa", "Hồng", "Thảo", "Trang", "Ngọc", "Mai", "Anh", "Luận", "Khoa", "Tín", "Nhân"]
# last_name = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý", "Chu", "Vương", "Tạ", "Tô"]
# address = ["Nguyễn Thị Minh Khai, Quận 1", "Nguyễn Văn Cừ, Quận 5", "Trần Duy Hưng, Hà Nội", "Nguyễn Chí Thanh, Quận 5", "Lê Duẫn, Quận 1", "Lê Thánh Tôn, Quận 1", "Hoàng Sa, Quận 3", "Trường Sa, Quận 3"]
# company_firstname = ["Công ty", "Công ty TNHH", "Công ty Cổ phần", "Công ty Trách nhiệm hữu hạn", "Công ty Hợp danh", "Công ty Hợp tác"]
# company_middle = ["Giày dép", "May mặc", "Gia vị", "Thực phẩm", "Thuốc", "Dược phẩm", "Thiết bị y tế"]
# company_lastname = ["ABC", "BCD", "CDE", "DEF", "EFG", "FGH", "GHI", "HIJ", "IJK", "JKL", "KLM", "LMN", "MNO", "NOP", "OPQ"]

# thanhvien_data = []

# for i in range(n_doanhnghiep + n_canhan):
#   loai = 1 if i < n_canhan else 2
#   ten = np.random.choice(company_firstname) + " " + np.random.choice(company_middle) + " " + np.random.choice(company_lastname) if loai == 2 else np.random.choice(first_name) + " " + np.random.choice(last_name)
#   email = unidecode.unidecode(ten).replace(" ", "").lower() + "@gmail.com"
#   diachi = f"{np.random.randint(1, 100)} {np.random.choice(address)}"
#   sodienthoai = f"0{np.floor(np.random.rand() * 999999999 + 100000000).astype(int)}"
#   masothue = None if loai == 1 else str(np.floor(np.random.rand() * 999999999 + 100000000).astype(int))
#   nguoidaidien = None if loai == 1 else np.random.choice(first_name) + " " + np.random.choice(last_name)
#   thanhvien_data.append({
#     "id": i + 1,
#     "loai": loai,
#     "ten": ten,
#     "email": email,
#     "diachi": diachi,
#     "sodienthoai": sodienthoai,
#     "masothue": masothue,
#     "nguoidaidien": nguoidaidien
#   })

# cur = conn.cursor()
# cur.execute("DELETE FROM thanhvien")

# for thanhvien in thanhvien_data:
#   # not using f-string to prevent SQL injection
#   # if null value, skip this value 
#   cur.execute("INSERT INTO thanhvien (id, loai, ten, email, diachi, sodienthoai, masothue, nguoidaidien) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)", (
#     thanhvien["id"],
#     thanhvien["loai"],
#     thanhvien["ten"],
#     thanhvien["email"],
#     thanhvien["diachi"],
#     thanhvien["sodienthoai"],
#     thanhvien["masothue"],
#     thanhvien["nguoidaidien"]
#   ))
  
'''
  maphieudt: integer
  madoanhnghiep: integer | masothue
  vitrituyen: varchar(50) | "Nhân viên", "Thực tập sinh", "Quản lý", "Giám đốc"
  soluongtuyen: integer | "Nhân viên": 1-20, "Thực tập sinh": 1-50, "Quản lý": 1-10, "Giám đốc": 1-3
  ngaybatdautuyen: date
  ngayketthuctuyen: date
  thongtinyeucau: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies."
  soluongdatuyen: 1-<soluongtuyen>
  trangthai: integer | 0: chưa tuyển, 1: đang tuyển, 2: đã tuyển, 4: hết hạn
'''

# get all doanhnghiep
cur = conn.cursor()
cur.execute("SELECT masothue FROM thanhvien WHERE loai = 2")
doanhnghiep = cur.fetchall()
doanhnghiep = [item for sublist in doanhnghiep for item in sublist]

position = ["Nhân viên", "Thực tập sinh", "Quản lý", "Giám đốc"]
max_number = [20, 50, 10, 3]
content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies."
state = [0, 1, 2, 4]

thongtindangtuyen = []
for i in range(np.random.randint(20, 50)):
  madoanhnghiep = np.random.choice(doanhnghiep)
  vitrituyen = np.random.choice(position)
  soluongtuyen = np.random.randint(1, max_number[position.index(vitrituyen)] + 1)
  ngaybatdautuyen = f"{np.random.randint(1, 29):02d}/{np.random.randint(1, 13):02d}/{np.random.randint(2020, 2022)}"
  ngayketthuctuyen = f"{np.random.randint(1, 29):02d}/{np.random.randint(1, 13):02d}/{np.random.randint(2022, 2023)}"
  
  # convert to date postgresql format
  ngaybatdautuyen = ngaybatdautuyen.split("/")
  ngaybatdautuyen = f"{ngaybatdautuyen[2]}-{ngaybatdautuyen[1]}-{ngaybatdautuyen[0]}"
  ngayketthuctuyen = ngayketthuctuyen.split("/")
  ngayketthuctuyen = f"{ngayketthuctuyen[2]}-{ngayketthuctuyen[1]}-{ngayketthuctuyen[0]}"
  
  thongtinyeucau = content
  soluongdatuyen = np.random.randint(1, soluongtuyen + 1)
  if soluongdatuyen == soluongtuyen:
    trangthai = 2
  else :
    # random expect 2: đã tuyển
    trangthai = np.random.choice(state) if np.random.rand() < 0.8 else 4
    if trangthai == 2:
      soluongdatuyen = soluongtuyen

  thongtindangtuyen.append({
    "maphieudt": i + 1,
    "madoanhnghiep": madoanhnghiep,
    "vitrituyen": vitrituyen,
    "soluongtuyen": soluongtuyen,
    "ngaybatdautuyen": ngaybatdautuyen,
    "ngayketthuctuyen": ngayketthuctuyen,
    "thongtinyeucau": thongtinyeucau,
    "soluongdatuyen": soluongdatuyen,
    "trangthai": int(trangthai)
  })

# print(thongtindangtuyen)


for tt in thongtindangtuyen:
  cur.execute("INSERT INTO thongtindangtuyen (maphieudt, madoanhnghiep, vitrituyen, soluongtuyen, ngaybatdautuyen, ngayketthuctuyen, thongtinyeucau, soluongdatuyen, trangthai) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)", (
    tt["maphieudt"],
    tt["madoanhnghiep"],
    tt["vitrituyen"],
    tt["soluongtuyen"],
    tt["ngaybatdautuyen"],
    tt["ngayketthuctuyen"],
    tt["thongtinyeucau"],
    tt["soluongdatuyen"],
    tt["trangthai"]
  ))

conn.commit()
cur.close()
conn.close()
