// src/app.d.ts

/// <reference types="@sveltejs/kit" />

import type { UserInfo } from './lib/types';

declare namespace App {
	/**
	 * Optionally make user info available on server-side routes via `locals`.
	 * Not used in current app, but here for future extension.
	 */
	interface Locals {
		user?: UserInfo;
	}

	/**
	 * For edge runtimes or custom platforms. Not used here.
	 */
	interface Platform {}

	/**
	 * Make user session data accessible to client if you later expose it.
	 * Not needed for current OAuth redirect flow.
	 */
	interface Session {
		user?: UserInfo;
	}

	/**
	 * Optional data passed between load functions.
	 * Currently unused.
	 */
	interface Stuff {}
}
