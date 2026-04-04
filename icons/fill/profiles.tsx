import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Profiles({
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
          d="m3.5,12.8828v-5.1328c0-2.3433,1.9067-4.25,4.25-4.25h5.1329c-.3289-1.1506-1.3781-2-2.6329-2h-6c-1.5166,0-2.75,1.2334-2.75,2.75v6c0,1.2549.8494,2.3042,2,2.6328Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.75,5h-6c-1.5187,0-2.75,1.2312-2.75,2.75v6c0,1.5188,1.2313,2.75,2.75,2.75h6c1.5188,0,2.75-1.2312,2.75-2.75v-6c0-1.5188-1.2312-2.75-2.75-2.75Zm-6.5,5c0-.5522.448-1,1-1s1,.4478,1,1-.448,1-1,1-1-.4478-1-1Zm3.4999,4c-.9221,0-1.6783-.7144-1.7452-1.6194-.0251-.3411.2823-.6367.6148-.5569.7156.1716,1.4592.1787,2.2344,0,.3428-.0791.6631.176.6431.5273-.0524.9189-.8151,1.6489-1.7471,1.6489Zm2.5001-3c-.552,0-1-.4478-1-1s.448-1,1-1,1,.4478,1,1-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Profiles;
