declare class UnixLepik {
    #private;
    constructor();
    /**
     * Gets the current position of the mouse cursor on the screen.
     * @returns {{ x: number, y: number }} A Promise that resolves with an object containing the X and Y coordinates of the mouse cursor.
     */
    getMousePosition(): {
        x: number;
        y: number;
    };
    /**
     * Performs a click with the specified mouse button
     * @param {string | number} [key='left'] - The key to use for the click (left, right, or middle mouse button)
     * @param {number} [am=1] - The number of clicks to perform. Default value is 1
     */
    mouseClick(button: string, amount: number): void;
    /**
    * Performs a double-click with the specified mouse button
    * @param {string | number} [key='left'] The key to use for the click (left, right, or middle mouse button)
    */
    mouseDoubleClick(button: string): void;
    /**
     * Scrolls the mouse wheel up or down by the given amount.
     * @param {number} [amount=1] - The amount to scroll. A positive number scrolls up, a negative number scrolls down.
     */
    mouseScroll(amount: number): void;
    /**
      * Drag the mouse from the first coordinates to the second coordinates
      * @param {number} [fromX=0] - The X-coordinate to start dragging from
      * @param {number} [fromY=0] - The Y-coordinate to start dragging from
      * @param {number} [toX=0] - The X-coordinate to drag to
      * @param {number} [toY=0] - The Y-coordinate to drag to
      * @param {boolean} [absolute=false] - Whether or not to use an absolute positioning of the mouse
      */
    mouseDrag(fromX: number, fromY: number, toX: number, toY: number, absolute?: boolean): void;
    /**
      * Move the mouse to the specified coordinates
      * @param {number} [toX=0] - The X-coordinate to move to
      * @param {number} [toY=0] - The Y-coordinate to move to
      * @param {boolean} [absolute=true] - Whether or not to use an acceleration curve when moving the mouse
      */
    mouseMove(toX: number, toY: number, absolute?: boolean): void;
    /**
     * Sends a key tap event for the given key.
     * @param {string} key - The key to tap. Must be a single character or a key name from the list returned by the `getSupportedKeys` method.
     * @returns {void}
     */
    keyTap(key: string | number): void;
    /**
     * Sends a string of text to the active window by simulating individual key presses for each character.
     * @param {string} - The text to write.
     * @param {number} - The delay between each key press in seconds.
     * @returns {void}
     */
    write(text: string | number, delay: number): void;
    /**
    * Sends a key down event for the given key.
    * @param {string} key - The key to press. Must be a single character or a key name from the list returned by the `getSupportedKeys` method.
    * @returns {void}
    */
    keyDown(key: string): void;
    /**
     * Sends a key up event for the given key.
     * @param {string} key - The key to release. Must be a single character or a key name from the list returned by the `getSupportedKeys` method.
     * @returns {void}
     */
    keyUp(key: string): void;
    getScreenSize(): {
        width: number;
        height: number;
    };
    getActiveWindowId(): number;
    close(): void;
}
export = UnixLepik;
