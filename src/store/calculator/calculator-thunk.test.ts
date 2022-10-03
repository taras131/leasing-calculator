import {fetchForm} from "./thunk";

describe.only("auth action creators", () => {
    test("creates the action fetchForm", () => {
        expect(fetchForm.fulfilled.type).toEqual("calculator/fetch/fulfilled");
        expect(fetchForm.pending.type).toEqual("calculator/fetch/pending");
        expect(fetchForm.rejected.type).toEqual("calculator/fetch/rejected");
    });
    test("exposes the typePrefix it was created with loginThunk", () => {
        expect(fetchForm.typePrefix).toEqual("calculator/fetch");
    });
});