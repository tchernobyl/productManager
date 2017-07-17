<?php
require '.././libs/Slim/Slim.php';
require_once 'dbHelper.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app = \Slim\Slim::getInstance();
$db = new dbHelper();

/**
 * Database Helper Function templates
 */
/*
select(table name, where clause as associative array)
insert(table name, data as associative array, mandatory column names as array)
update(table name, column names as associative array, where clause as associative array, required columns as array)
delete(table name, where clause as array)
*/


// Products
$app->get('/products', function() { 
    global $db;
    $rows = $db->select("products","id,name,description,price,stock,packing,status",array());
    echoResponse(200, $rows);
});

$app->post('/products', function() use ($app) { 
    $data = json_decode($app->request->getBody());
    $mandatory = array('name');
    global $db;
    $rows = $db->insert("products", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Product added successfully.";
    echoResponse(200, $rows);
});

$app->put('/products/:id', function($id) use ($app) { 
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("products", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Product information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/products/:id', function($id) { 
    global $db;
    $rows = $db->delete("products", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Product removed successfully.";
    echoResponse(200, $rows);
});


// Categories
$app->get('/categories', function() {
    global $db;
    $rows = $db->select("categories","id,name,description,status",array());
    echo json_encode($rows,JSON_NUMERIC_CHECK);

});

$app->post('/categories', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $mandatory = array('name');
    global $db;
    $rows = $db->insert("categories", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Category added successfully.";
    echoResponse(200, $rows);
});

$app->put('/categories/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("categories", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Category information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/categories/:id', function($id) {
    global $db;
    $rows = $db->delete("categories", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Category removed successfully.";
    echoResponse(200, $rows);
});


function echoResponse($status_code, $response) {
    global $app;
    $app->status($status_code);
    $app->contentType('application/json');

    echo json_encode($response,JSON_NUMERIC_CHECK);
}

$app->run();
?>