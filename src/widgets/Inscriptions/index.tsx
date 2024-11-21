import { Text, Radio, Button, DialogBody, DialogFooter, DialogHeader, Checkbox } from "@/index";

import { FieldControl } from "@/widgets/FieldControl";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  className?: string;
  onSubmit?: (value: boolean, showAgain: boolean) => void;
}

export function Inscriptions({ className, onSubmit }: Props) {
  const [lockInscriptions = true, toggleInscriptions] = useState<boolean | undefined>();
  const [showAgain = true, toggleShowAgain] = useState<boolean | undefined>();

  return (
    <div className={twMerge("mb-8 flex flex-1 flex-col", className)}>
      <DialogHeader title="Bitcoin Inscriptions" className="mb-8">
        <Text className="mb-6">
          This staking interface attempts to detect bitcoin ordinals, NFTs, Ruins, and other inscriptions
          (“Inscriptions”) within the Unspent Transaction Outputs (“UTXOs”) in your wallet. If you stake bitcoin with
          Inscriptions, those UTXOs may be spent on staking, unbonding, or withdrawal fees, which will cause you to lose
          those Inscriptions permanently. This interface will not detect all Inscriptions.
        </Text>

        <Text>Chose one: (you can change this later)</Text>
      </DialogHeader>

      <DialogBody>
        <form action="">
          <FieldControl
            label="Lock bitcoin UTXOs with detected Inscriptions so they will not be spent."
            className="mb-8"
          >
            <Radio name="inscriptions" checked={lockInscriptions} onChange={() => toggleInscriptions(true)} />
          </FieldControl>

          <FieldControl
            label="Unlock bitcoin UTXOs with detected Inscriptions in my stakable balance. I understand and agree that doing so can cause the complete and permanent loss of Inscriptions and that I am solely liable and responsible for their loss."
            className="mb-8"
          >
            <Radio name="inscriptions" checked={!lockInscriptions} onChange={() => toggleInscriptions(false)} />
          </FieldControl>
        </form>
      </DialogBody>

      <DialogFooter className="mt-auto pt-10">
        <Checkbox
          checked={!showAgain}
          label="Do not show again"
          labelClassName="mb-6"
          onChange={(value) => toggleShowAgain(!value)}
        />
        <Button fluid onClick={() => void onSubmit?.(lockInscriptions, showAgain)}>
          Save
        </Button>
      </DialogFooter>
    </div>
  );
}
