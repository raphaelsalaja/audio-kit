import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Note3({
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
          d="m13.25,2H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h5.1719c.7344,0,1.4248-.2861,1.9443-.8057l3.3281-3.3281c.5195-.5195.8057-1.21.8057-1.9448v-5.1714c0-1.5166-1.2334-2.75-2.75-2.75Zm-6,10.5h-1.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Zm.75-2.75h-2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.25c.4141,0,.75.3359.75.75s-.3359.75-.75.75Zm-2.25-2.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h6.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-6.5Zm8.3838,3.8057l-3.3281,3.3281c-.0876.0879-.197.146-.3057.2039v-3.5876c0-.1377.1123-.25.25-.25h3.5886c-.0576.1079-.1158.2166-.2048.3057Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Note3;
