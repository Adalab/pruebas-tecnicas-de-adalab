USE bd_prueba_tecnica;

-- Comprobar que se han cargado todos los registros de las tablas
SELECT COUNT(*)
FROM clientes;

SELECT COUNT(*)
FROM productos;

SELECT COUNT(*)
FROM ventas;

-- Obtener los 5 productos con mayores ingrestos totales.

SELECT 
p.id_producto,
SUM(precio) AS ventas
FROM ventas AS v
INNER JOIN productos AS p
ON v.id_producto = p.id_producto
GROUP BY p.id_producto
ORDER BY ventas DESC
LIMIT 5;


-- Filtrar los clientes que hayan realizado al menos tres compras en el útlimo año.

SELECT
id_cliente
FROM ventas
WHERE fecha >= '2024-01-01'
GROUP BY id_cliente
HAVING COUNT(DISTINCT id_venta) >= 3;


-- Calcular el ingreso promedio mensual por cliente.

SELECT 
v.id_cliente,
EXTRACT(YEAR_MONTH FROM fecha) AS mes, 
AVG(v.cantidad * p.precio) AS ingreso_promedio_mensual
FROM ventas AS v
INNER JOIN productos AS p
ON v.id_producto = p.id_producto
GROUP BY 
v.id_cliente,
mes
ORDER BY
id_cliente,
mes;


  