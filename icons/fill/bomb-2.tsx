import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bomb2({
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
          d="M16.578,5.436c-.515,0-1.022-.2-1.409-.587l-.88-.88c-.094-.094-.218-.145-.35-.145h0c-.132,0-.255,.051-.348,.145l-.721,.72c-.294,.294-.769,.292-1.061,0s-.293-.768,0-1.061l.72-.719c.376-.376,.876-.584,1.409-.584h0c.532,0,1.033,.208,1.41,.584l.88,.88c.16,.16,.417,.19,.61,.071,.354-.22,.815-.111,1.033,.241,.219,.352,.111,.814-.24,1.033-.327,.204-.692,.303-1.055,.303Z"
          fill={secondaryfill}
        />
        <path
          d="M14.146,5.277c-.368-.626-.817-1.2-1.333-1.706-.479-.469-1.014-.878-1.591-1.217-.293-.173-.668-.126-.91,.116l-.972,.971c-.75-.293-1.535-.441-2.341-.441C3.416,3,.5,5.916,.5,9.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5c0-.807-.148-1.592-.44-2.342l.971-.971c.242-.242,.289-.616,.116-.911Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bomb2;
