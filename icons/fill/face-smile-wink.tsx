import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSmileWink({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1ZM5,9c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm6.884,3.16c-.631,.996-1.709,1.59-2.884,1.59s-2.253-.595-2.884-1.59c-.222-.35-.117-.813,.232-1.035,.349-.221,.813-.118,1.035,.232,.354,.559,.958,.893,1.616,.893s1.262-.334,1.616-.893c.222-.35,.684-.454,1.035-.232,.35,.222,.454,.685,.232,1.035Zm1.213-2.456c-.147,.194-.371,.296-.598,.296-.158,0-.317-.05-.453-.153-.129-.098-.402-.263-.776-.269-.418,.01-.681,.167-.818,.27-.331,.25-.801,.185-1.05-.146-.25-.33-.185-.801,.146-1.05,.29-.22,.919-.566,1.745-.574,.803,.012,1.386,.365,1.661,.575,.33,.25,.394,.721,.144,1.051Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSmileWink;
