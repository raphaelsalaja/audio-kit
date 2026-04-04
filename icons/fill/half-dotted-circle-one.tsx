import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HalfDottedCircleOne({
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
          d="M9,17c-4.411,0-8-3.589-8-8S4.589,1,9,1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M9.25,13c-.414,0-.75-.336-.75-.75V7.529c-.392,.248-.868,.461-1.434,.569-.398,.073-.8-.189-.877-.596-.078-.407,.188-.8,.596-.878,1.203-.23,1.791-1.208,1.815-1.25,.172-.292,.522-.435,.845-.346,.327,.089,.555,.383,.555,.721v6.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <circle cx="14.127" cy="14.127" fill={fill} r=".75" />
        <circle cx="16.25" cy="9" fill={fill} r=".75" />
        <circle cx="14.127" cy="3.873" fill={fill} r=".75" />
        <circle cx="11.774" cy="15.698" fill={fill} r=".75" />
        <circle cx="15.698" cy="11.774" fill={fill} r=".75" />
        <circle cx="15.698" cy="6.226" fill={fill} r=".75" />
        <circle cx="11.774" cy="2.302" fill={fill} r=".75" />
      </g>
    </svg>
  );
}

export default HalfDottedCircleOne;
