import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileQuestion({
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
          d="m17.099,9.299l-1.354-1.805c-.072-1.944-.972-3.749-2.49-4.984-1.587-1.289-3.665-1.783-5.701-1.359-2.549.533-4.619,2.602-5.153,5.151-.599,2.868.639,5.7,3.099,7.191v2.756c0,.414.336.75.75.75h5c.414,0,.75-.336.75-.75v-1.75h.89c1.435,0,2.64-1.121,2.742-2.551l.078-1.075,1.068-.427c.217-.086.381-.269.443-.494.063-.225.019-.466-.122-.653Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m8.8613,9.4546c-.0654,0-.1318-.0083-.1982-.0269-.3994-.1094-.6348-.522-.5254-.9214.2119-.771.7598-1.1431,1.1611-1.4146.4229-.2871.5957-.4199.6367-.833.0186-.1919-.0273-.3408-.1436-.4688-.1592-.1763-.4375-.29-.708-.29-.3408,0-.9512.106-1.2119.8174-.1426.3887-.5742.5854-.9619.4468-.3887-.1426-.5889-.5732-.4463-.9624.4121-1.1279,1.3926-1.8018,2.6201-1.8018.6953,0,1.375.2925,1.8193.7817.3975.4385.584,1.0146.5244,1.623-.1104,1.1304-.8184,1.6104-1.2871,1.9282-.3564.2417-.4971.3535-.5557.5698-.0918.333-.3936.5518-.7236.5518Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.875,12c-.4821,0-.875-.3937-.875-.875s.3929-.875.875-.875.875.3938.875.875-.3929.875-.875.875Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SideProfileQuestion;
