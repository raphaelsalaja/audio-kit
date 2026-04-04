import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M16.161,2.062c-.339-.29-.812-.375-1.231-.227L2.631,6.228h0c-.436,.156-.747,.538-.815,.995-.067,.458,.122,.913,.494,1.188l1.439,1.064,3.413-2.588c.332-.251,.802-.185,1.051,.145,.25,.33,.186,.8-.145,1.051l-3.067,2.326v3.86c0,.473,.262,.899,.683,1.114,.181,.092,.375,.137,.568,.137,.259,0,.516-.081,.734-.24l.74-.539c.335-.244,.409-.713,.165-1.048-.242-.334-.711-.411-1.048-.165l-.343,.25v-2.268l5.911,4.369c.22,.162,.479,.245,.741,.245,.154,0,.311-.029,.461-.088,.402-.159,.69-.509,.77-.935l2.196-11.859c.083-.444-.073-.885-.418-1.179Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaperPlane;
