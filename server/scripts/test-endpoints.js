// Simple endpoint smoke tests against the running NestJS server.
// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});










// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});










// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});




// Assumes:
// - Server is running on http://localhost:3000
// - Remote DB is configured via DATABASE_URL
// - Test users have been seeded (admin@emdad3pl.com / client1@acme.com, password123)

const BASE_URL = 'http://localhost:3000';

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  let bodyText = await res.text();
  let body;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = bodyText;
  }
  return { status: res.status, body };
}

async function run() {
  console.log('🔍 Testing API endpoints against remote DB via running server...\n');

  // 1) Staff login
  console.log('1) POST /auth/staff/login');
  const staffLogin = await jsonFetch('/auth/staff/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@emdad3pl.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', staffLogin.status);
  if (staffLogin.status !== 201 && staffLogin.status !== 200) {
    console.log('   Response:', staffLogin.body);
    console.log('❌ Staff login failed, cannot test protected endpoints further.');
    return;
  }
  const staffAccessToken = staffLogin.body.accessToken;
  console.log('   ✅ Staff login OK\n');

  // 2) Client login
  console.log('2) POST /auth/client/login');
  const clientLogin = await jsonFetch('/auth/client/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'client1@acme.com',
      password: 'password123',
    }),
  });
  console.log('   Status:', clientLogin.status);
  if (clientLogin.status === 200 || clientLogin.status === 201) {
    console.log('   ✅ Client login OK');
  } else {
    console.log('   ⚠️ Client login failed:', clientLogin.body);
  }
  console.log();

  // Helper for authenticated GET
  const authGet = (path) =>
    jsonFetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${staffAccessToken}`,
      },
    });

  // 3) Inventory current stock
  console.log('3) GET /inventory/current-stock');
  const currentStock = await authGet('/inventory/current-stock');
  console.log('   Status:', currentStock.status);
  if (currentStock.status === 200) {
    console.log(
      '   Sample item:',
      Array.isArray(currentStock.body) && currentStock.body.length
        ? currentStock.body[0]
        : null,
    );
  } else {
    console.log('   Response:', currentStock.body);
  }
  console.log();

  // 4) Outbound orders list
  console.log('4) GET /outbound-orders');
  const outboundOrders = await authGet('/outbound-orders');
  console.log('   Status:', outboundOrders.status);
  if (outboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(outboundOrders.body) ? outboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', outboundOrders.body);
  }
  console.log();

  // 5) Inbound orders list
  console.log('5) GET /inbound-orders');
  const inboundOrders = await authGet('/inbound-orders');
  console.log('   Status:', inboundOrders.status);
  if (inboundOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(inboundOrders.body) ? inboundOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', inboundOrders.body);
  }
  console.log();

  // 6) Adjustments list
  console.log('6) GET /adjustments');
  const adjustments = await authGet('/adjustments');
  console.log('   Status:', adjustments.status);
  if (adjustments.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(adjustments.body) ? adjustments.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', adjustments.body);
  }
  console.log();

  // 7) Return orders list
  console.log('7) GET /return-orders');
  const returnOrders = await authGet('/return-orders');
  console.log('   Status:', returnOrders.status);
  if (returnOrders.status === 200) {
    console.log(
      '   Count:',
      Array.isArray(returnOrders.body) ? returnOrders.body.length : 'n/a',
    );
  } else {
    console.log('   Response:', returnOrders.body);
  }
  console.log();

  console.log('✅ Endpoint smoke tests completed.');
}

run().catch((err) => {
  console.error('❌ Error in test-endpoints script:', err);
  process.exit(1);
});












