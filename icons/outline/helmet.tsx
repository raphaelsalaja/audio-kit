import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Helmet({
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
          d="M9,1.75c-.162,0-.326,.006-.49,.019-3.199,.242-5.742,2.785-5.984,5.984l-.471,5.385c-.033,.374,.155,.733,.48,.921l3.714,2.192v-5.34l-1.5-.548v-2.535l3.825,.832c.28,.061,.57,.061,.85,0l3.825-.832v2.535s-1.5,.548-1.5,.548v5.34s3.714-2.192,3.714-2.192c.326-.187,.513-.547,.48-.921l-.471-5.385c-.242-3.199-2.785-5.742-5.984-5.984-.164-.012-.328-.019-.49-.019Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Helmet;
