import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartActivity({
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
          d="M2,14.75c-.182,0-.364-.066-.509-.199-.304-.281-.323-.755-.042-1.06l3-3.25c.174-.189,.434-.275,.688-.229,.253,.047,.464,.22,.56,.459l.446,1.116,3.219-5.23c.15-.245,.417-.379,.715-.353,.286,.029,.53,.219,.629,.49l1.394,3.833,3.227-6.654c.18-.374,.628-.529,1.002-.348,.373,.181,.528,.629,.348,1.002l-4,8.25c-.132,.271-.396,.434-.713,.422-.301-.016-.563-.209-.667-.493l-1.469-4.042-3.187,5.178c-.148,.241-.417,.377-.703,.354-.283-.024-.527-.206-.632-.469l-.559-1.396-2.194,2.377c-.148,.16-.35,.241-.551,.241Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartActivity;
