import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AddMagic({
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
          d="m14,9.25c0-.3076-.1885-.5845-.4746-.6973l-3.8184-1.5103-1.5098-3.8184c-.1133-.2861-.3896-.4741-.6973-.4741s-.584.188-.6973.4741l-1.5107,3.8184-3.8174,1.5103c-.2861.1128-.4746.3896-.4746.6973s.1885.5845.4746.6973l3.8174,1.5103,1.5107,3.8184c.1133.2861.3896.4741.6973.4741s.584-.188.6973-.4741l1.5098-3.8184,3.8184-1.5103c.2861-.1128.4746-.3896.4746-.6973Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16,13.5h-1v-1c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1h-1c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1v1c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1h1c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle cx="14" cy="4" fill={secondaryfill} r="2.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default AddMagic;
