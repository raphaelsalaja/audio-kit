import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pointer2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11.079,3.532L1.713.109C1.247-.059.748.052.4.399.052.747-.06,1.25.109,1.712l3.422,9.368c.184.5.642.82,1.173.82.009,0,.018,0,.027,0,.542-.011.999-.352,1.164-.869l1.245-3.89,3.891-1.245c.517-.166.857-.623.868-1.166.012-.542-.312-1.013-.82-1.199Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Pointer2;
